"use strict";

// --- FIREBASE CONFIGURATION FOR CROSS-DEVICE SYNC ---
const firebaseConfig = {
    apiKey: "YOUR_FIREBASE_API_KEY",
    authDomain: "YOUR_PROJECT.firebaseapp.com",
    databaseURL: "https://YOUR_PROJECT-default-rtdb.firebaseio.com",
    projectId: "YOUR_PROJECT",
    storageBucket: "YOUR_PROJECT.appspot.com",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID"
};

let firebaseInitialized = false;
let dbRef = null;

try {
    if (firebaseConfig.apiKey !== "YOUR_FIREBASE_API_KEY") {
        firebase.initializeApp(firebaseConfig);
        dbRef = firebase.database().ref("cloud_bincard_data");
        firebaseInitialized = true;
    }
} catch (e) {
    console.warn("Firebase Init Error:", e);
}

// Global Variables
let binCardData = [];
let filteredData = [];
const PAGE_SIZE = 50;
let currentPage = 1;
let confirmCallback = null;
let showDetailedStats = false;
let currentFileId = null;
const CLOUD_SYNC_ID = 888888; 

// --- LOCAL WEB STORAGE (INDEXEDDB) HANDLERS ---
const DB_NAME = 'BinCardBrowserDB';
const DB_VERSION = 1;
let localDB;

function initDB() {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open(DB_NAME, DB_VERSION);
        request.onupgradeneeded = (e) => {
            const database = e.target.result;
            if (!database.objectStoreNames.contains('metadata')) database.createObjectStore('metadata', { keyPath: "id", autoIncrement: true });
            if (!database.objectStoreNames.contains('datasets')) database.createObjectStore('datasets', { keyPath: "id" });
        };
        request.onsuccess = (e) => { localDB = e.target.result; resolve(localDB); };
        request.onerror = (e) => reject("DB Error: " + e.target.error);
    });
}

function saveToWebStorage(filename, dataArray, customId = null) {
    return new Promise((resolve, reject) => {
        const transaction = localDB.transaction(['metadata', 'datasets'], "readwrite");
        const metaRecord = { filename: filename, timestamp: Date.now() };
        
        if (customId !== null) {
            metaRecord.id = customId;
            transaction.objectStore('metadata').put(metaRecord);
            transaction.objectStore('datasets').put({ id: customId, data: dataArray });
            transaction.oncomplete = () => resolve({ id: customId, filename });
        } else {
            const addReq = transaction.objectStore('metadata').add(metaRecord);
            addReq.onsuccess = (e) => {
                const newId = e.target.result;
                transaction.objectStore('datasets').add({ id: newId, data: dataArray });
                resolve({ id: newId, filename });
            };
        }
        transaction.onerror = (e) => reject(e.target.error);
    });
}

function getWebStorageHistory() {
    return new Promise((resolve, reject) => {
        const transaction = localDB.transaction(['metadata'], "readonly");
        const request = transaction.objectStore('metadata').getAll();
        request.onsuccess = () => {
            const res = request.result || [];
            res.sort((a, b) => b.timestamp - a.timestamp);
            resolve(res);
        };
        request.onerror = (e) => reject(e.target.error);
    });
}

function loadFromWebStorage(id) {
    return new Promise((resolve, reject) => {
        const transaction = localDB.transaction(['datasets'], "readonly");
        const request = transaction.objectStore('datasets').get(id);
        request.onsuccess = () => resolve(request.result ? request.result.data : null);
        request.onerror = (e) => reject(e.target.error);
    });
}

function deleteFromWebStorage(id) {
    return new Promise((resolve, reject) => {
        const transaction = localDB.transaction(['metadata', 'datasets'], "readwrite");
        transaction.objectStore('metadata').delete(id);
        transaction.objectStore('datasets').delete(id);
        transaction.oncomplete = () => resolve();
        transaction.onerror = (e) => reject(e.target.error);
    });
}

// --- CLOUD SYNC SERVICES ---
function setupFirebaseListener() {
    if (!firebaseInitialized || !dbRef) return;

    dbRef.on("value", async (snapshot) => {
        const val = snapshot.val();
        if (val && val.items) {
            const cloudFileName = val.filename || "Cloud Data";
            
            // Automatically cache remote cloud data to local web storage
            try {
                await saveToWebStorage(cloudFileName, val.items, CLOUD_SYNC_ID);
                currentFileId = CLOUD_SYNC_ID;
                localStorage.setItem('activeBinCardFileId', CLOUD_SYNC_ID);
            } catch (e) {
                console.warn("Local caching error:", e);
            }

            processAndDisplayItems(val.items, cloudFileName);
            updateOnlineStatusUI(true);
        }
    });
}

async function syncDataToCloud(filename, data) {
    if (!firebaseInitialized || !navigator.onLine || !dbRef) return;
    try {
        await dbRef.set({
            filename: filename,
            items: data,
            lastSync: Date.now()
        });
        showToast("Synced across all devices via Cloud!", "success");
    } catch (e) {
        showToast("Cloud update failed.", "error");
    }
}

// --- NETWORK UI MONITORING ---
function updateOnlineStatusUI(isOnline) {
    const badge = document.getElementById('liveStatusBadge');
    if (!badge) return;
    if (isOnline && firebaseInitialized) {
        badge.className = "status-chip online";
        badge.innerHTML = `<i class="fas fa-globe"></i> Cloud Sync Active`;
    } else {
        badge.className = "status-chip offline";
        badge.innerHTML = `<i class="fas fa-wifi-slash"></i> Web Storage Only`;
    }
}

window.addEventListener('offline', () => {
    updateOnlineStatusUI(false);
    const notice = document.getElementById('offlineNotice');
    notice.classList.add('show');
    setTimeout(() => { notice.classList.remove('show'); }, 4000);
    showToast("Offline mode. Data will be kept in Web Storage.", "error");
});

window.addEventListener('online', async () => {
    updateOnlineStatusUI(true);
    showToast("Internet connected. Syncing...", "success");
    if (currentFileId && currentFileId !== CLOUD_SYNC_ID) {
        const data = await loadFromWebStorage(currentFileId);
        const filename = document.getElementById('activeFileName').innerText;
        if (data) syncDataToCloud(filename, data);
    }
});

// --- APPLICATION STARTUP ---
document.addEventListener('DOMContentLoaded', async () => {
    const savedTheme = localStorage.getItem('binCardTheme') || 'default';
    setTheme(savedTheme, false);
    setupDragAndDrop();
    updateOnlineStatusUI(navigator.onLine);

    try {
        await initDB();
        setupFirebaseListener();
        await loadInitialData();
    } catch (e) {
        showEmptyState();
    }

    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal-overlay')) {
            closeModal(); closeSettingsModal(); closeConfirmModal(false); closeHistoryModal();
        }
    });
});

async function loadInitialData() {
    const history = await getWebStorageHistory();
    if (history.length > 0) {
        const savedIdStr = localStorage.getItem('activeBinCardFileId');
        let targetId = savedIdStr ? parseInt(savedIdStr) : history[0].id;
        const targetMeta = history.find(h => h.id === targetId) || history[0];
        await loadFileIntoView(targetMeta.id, targetMeta.filename);
    } else {
        showEmptyState();
    }
}

// --- DATA PROCESSING & CALCULATIONS ---
function processAndDisplayItems(rawItems, filename) {
    binCardData = [];
    
    rawItems.forEach(item => {
        const op = parseNum(item.openingStock);
        const rec = parseNum(item.receipt);
        const iss = parseNum(item.issues);
        const ret = parseNum(item.returnQty);
        
        // Exclude completely zeroed non-transaction items
        if (rec === 0 && iss === 0 && ret === 0) return;

        // Formula: Closing Stock = Opening Stock + Received - Issued + Returned
        const closing = op + rec - iss + ret;

        binCardData.push({
            matCode: item.matCode,
            matName: item.matName,
            openingStock: op,
            receipt: rec,
            issues: iss,
            returnQty: ret,
            closingStock: closing
        });
    });

    filteredData = [...binCardData];
    document.getElementById('searchInput').value = '';
    document.getElementById('activeFileName').innerText = filename;
    
    updateDashboardStats();
    toggleUIElements(true);
    renderCards(true);
}

// --- FILE PARSER ---
function setupDragAndDrop() {
    const dropArea = document.getElementById('dropArea');
    if (!dropArea) return;
    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(ev => dropArea.addEventListener(ev, e => { e.preventDefault(); e.stopPropagation(); }));
    dropArea.addEventListener('drop', e => { if (e.dataTransfer.files.length) handleFileUpload(e.dataTransfer.files[0]); });
    document.getElementById('fileInput').addEventListener('change', e => {
        if (e.target.files.length) handleFileUpload(e.target.files[0]);
        e.target.value = '';
    });
}

function handleFileUpload(file) {
    showToast("Processing file data...", "info");
    const reader = new FileReader();
    reader.onload = async (e) => {
        try {
            const data = new Uint8Array(e.target.result);
            const workbook = XLSX.read(data, { type: 'array' });
            const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
            await parseAndSaveExcel(firstSheet, file.name);
        } catch (error) {
            showToast("Failed to parse file", "error");
        }
    };
    reader.readAsArrayBuffer(file);
}

async function parseAndSaveExcel(worksheet, filename) {
    const rawData = XLSX.utils.sheet_to_json(worksheet, { header: 1, defval: "" });
    if (!rawData.length) return showToast("File contains no data", "error");

    let parsedItems = [];
    let headerRowIndex = -1;
    let colMap = { code: -1, name: -1, opening: -1, receipt: -1, issue: -1, returnQty: -1 };

    const keywords = {
        code: [/code/i, /item/i, /කේතය/i, /matcode/i],
        name: [/name/i, /description/i, /විස්තරය/i],
        opening: [/opening/i, /b\/f/i, /මුල්/i],
        receipt: [/receipt/i, /received/i, /\bin\b/i, /ලැබීම්/i],
        issue: [/issue/i, /\bout\b/i, /නිකුත්/i],
        returnQty: [/return/i, /ආපසු/i]
    };

    for (let i = 0; i < Math.min(20, rawData.length); i++) {
        let row = rawData[i];
        let matches = 0, tempMap = { code: -1, name: -1, opening: -1, receipt: -1, issue: -1, returnQty: -1 };
        row.forEach((cell, idx) => {
            let text = String(cell).trim();
            for (let key in keywords) {
                if (tempMap[key] === -1 && keywords[key].some(rx => rx.test(text))) { tempMap[key] = idx; matches++; break; }
            }
        });
        if (matches >= 2) { headerRowIndex = i; colMap = tempMap; break; }
    }

    if (headerRowIndex === -1) { colMap = { code: 0, name: 1, opening: 2, receipt: 3, issue: 4, returnQty: 5 }; headerRowIndex = 0; }

    for (let i = headerRowIndex + 1; i < rawData.length; i++) {
        let row = rawData[i];
        if (!row || !row.length) continue;
        
        let code = colMap.code !== -1 ? String(row[colMap.code]).trim() : `ITEM-${i}`;
        let name = colMap.name !== -1 ? String(row[colMap.name]).trim() : code;
        if (!code) continue;

        parsedItems.push({
            matCode: code, matName: name,
            openingStock: colMap.opening !== -1 ? row[colMap.opening] : 0,
            receipt: colMap.receipt !== -1 ? row[colMap.receipt] : 0,
            issues: colMap.issue !== -1 ? row[colMap.issue] : 0,
            returnQty: colMap.returnQty !== -1 ? row[colMap.returnQty] : 0
        });
    }

    // Save locally to IndexedDB
    const result = await saveToWebStorage(filename, parsedItems);
    
    // Sync to Cloud
    if (navigator.onLine) await syncDataToCloud(filename, parsedItems);

    await loadFileIntoView(result.id, result.filename);
    closeModal();
}

// --- UI INTERACTIONS & RENDER logic ---
async function loadFileIntoView(id, filename) {
    try {
        const data = await loadFromWebStorage(id);
        if (data) {
            currentFileId = id;
            localStorage.setItem('activeBinCardFileId', id);
            processAndDisplayItems(data, filename);
            closeHistoryModal();
            showToast(`Loaded: ${filename}`, 'success');
        }
    } catch (e) { showToast("Error loading file", "error"); }
}

async function loadHistoryUI() {
    const container = document.getElementById('historyListContainer');
    container.innerHTML = 'Loading storage...';
    try {
        const history = await getWebStorageHistory();
        if (!history.length) { container.innerHTML = 'No stored datasets found.'; return; }

        container.innerHTML = history.map(item => `
            <div class="history-item">
                <div class="history-info">
                    <h4><i class="fas fa-file-alt"></i> ${escapeHtml(item.filename)}</h4>
                    <p>${new Date(item.timestamp).toLocaleString()}</p>
                </div>
                <div style="display:flex; gap:6px;">
                    ${item.id !== currentFileId ? `<button class="chip-btn" onclick="loadFileIntoView(${item.id}, '${escapeHtml(item.filename)}')">Open</button>` : ''}
                    <button class="icon-btn danger" onclick="confirmDeleteHistoryItem(${item.id}, '${escapeHtml(item.filename)}')"><i class="fas fa-trash"></i></button>
                </div>
            </div>
        `).join('');
    } catch (e) { container.innerHTML = 'Failed to load storage list.'; }
}

function confirmDeleteHistoryItem(id, filename) {
    showConfirmModal("Delete Saved Data", `Remove '${filename}' from Web Storage?`, async () => {
        await deleteFromWebStorage(id);
        if (id === currentFileId) { currentFileId = null; localStorage.removeItem('activeBinCardFileId'); showEmptyState(); }
        loadHistoryUI();
        showToast("Item deleted", "success");
    });
}
function confirmDeleteCurrentFile() { if (currentFileId) confirmDeleteHistoryItem(currentFileId, document.getElementById('activeFileName').innerText); }

function updateDashboardStats() {
    document.getElementById('statTotalItems').innerText = formatNumber(binCardData.length);
    document.getElementById('statTotalReceived').innerText = formatNumber(binCardData.reduce((s, i) => s + i.receipt, 0));
    document.getElementById('statTotalIssues').innerText = formatNumber(binCardData.reduce((s, i) => s + i.issues, 0));
    document.getElementById('statTotalStock').innerText = formatNumber(binCardData.reduce((s, i) => s + i.closingStock, 0));
}

function renderCards(reset = false) {
    const container = document.getElementById('cardContainer');
    if (reset) { currentPage = 1; container.innerHTML = ''; }
    if (!filteredData.length) { container.innerHTML = `<div class="empty-state"><h3>No matching records found</h3></div>`; return; }

    const end = Math.min(currentPage * PAGE_SIZE, filteredData.length);
    const html = filteredData.slice((currentPage - 1) * PAGE_SIZE, end).map(item => `
        <div class="card">
            ${item.closingStock <= 0 ? '<span class="badge badge-danger">Out of Stock</span>' : item.closingStock < 10 ? '<span class="badge badge-warning">Low Stock</span>' : '<span class="badge badge-success">Available</span>'}
            <div class="mat-code"><i class="fas fa-tag"></i> ${escapeHtml(item.matCode)}</div>
            <div class="mat-name">${escapeHtml(item.matName)}</div>
            <div class="data-grid">
                <div class="data-item"><span class="d-label">Opening</span><span class="d-value">${formatNumber(item.openingStock)}</span></div>
                <div class="data-item"><span class="d-label">In</span><span class="d-value" style="color:var(--success);">${formatNumber(item.receipt)}</span></div>
                <div class="data-item"><span class="d-label">Out</span><span class="d-value" style="color:var(--danger);">${formatNumber(item.issues)}</span></div>
                <div class="data-item"><span class="d-label">Return</span><span class="d-value">${formatNumber(item.returnQty)}</span></div>
            </div>
            <div class="stock-total"><span class="d-label">Closing Balance</span><span class="d-value">${formatNumber(item.closingStock)}</span></div>
        </div>
    `).join('');
    
    const tempDiv = document.createElement('div'); tempDiv.innerHTML = html;
    while(tempDiv.firstChild) container.appendChild(tempDiv.firstChild);
    document.getElementById('loadMoreContainer').style.display = end < filteredData.length ? 'block' : 'none';
}

// --- HELPER FUNCTIONS ---
function parseNum(v) { let n = parseFloat(String(v).replace(/,/g, '')); return isNaN(n) ? 0 : n; }
function formatNumber(n) { return n.toLocaleString('en-US', { maximumFractionDigits: 2 }); }
function escapeHtml(str) { return String(str).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;"); }
function handleSearch() {
    const q = document.getElementById('searchInput').value.toLowerCase();
    filteredData = q ? binCardData.filter(i => i.matCode.toLowerCase().includes(q) || i.matName.toLowerCase().includes(q)) : [...binCardData];
    renderCards(true);
}
function loadMoreCards() { currentPage++; renderCards(false); }

function setTheme(theme, save = true) {
    document.body.className = `theme-${theme}`;
    if (save) { localStorage.setItem('binCardTheme', theme); closeSettingsModal(); }
}
function toggleDetailedStats() {
    showDetailedStats = !showDetailedStats;
    ['statCardReceived', 'statCardIssues', 'statCardStock'].forEach(id => document.getElementById(id).style.display = showDetailedStats ? 'flex' : 'none');
    document.getElementById('toggleStatsText').innerText = showDetailedStats ? 'Hide Stats' : 'Extra Stats';
}
function toggleUIElements(show) {
    ['dashboardStats', 'controlsBar', 'searchContainer', 'btnClearData', 'btnDownloadPdf'].forEach(id => document.getElementById(id).style.display = show ? (id==='controlsBar'||id==='btnClearData'||id==='btnDownloadPdf'?'flex':'block') : 'none');
}
function showEmptyState() {
    toggleUIElements(false);
    const c = document.getElementById('cardContainer');
    if (c) c.innerHTML = `<div class="empty-state"><i class="fas fa-folder-open"></i><h3>No Stored Data</h3><p>Upload an Excel file to store locally and sync online.</p></div>`;
}

// Dialogs and Notifications
function showToast(msg, type = 'success') {
    const c = document.getElementById('toast-container');
    const t = document.createElement('div'); t.className = `toast ${type}`;
    t.innerHTML = `<i class="fas ${type==='error'?'fa-exclamation-circle':'fa-check-circle'} toast-icon"></i><div class="toast-content"><p>${msg}</p></div>`;
    c.appendChild(t); setTimeout(() => { t.classList.add('fade-out'); setTimeout(() => t.remove(), 300); }, 3000);
}
function showConfirmModal(title, msg, callback) {
    document.getElementById('confirmTitle').innerText = title; document.getElementById('confirmMessage').innerText = msg;
    confirmCallback = callback; document.getElementById('confirmModal').style.display = 'flex';
}
function closeConfirmModal(res) { document.getElementById('confirmModal').style.display = 'none'; if(res && confirmCallback) confirmCallback(); confirmCallback = null; }

function openSettingsModal() { document.getElementById('settingsModal').style.display = 'flex'; }
function closeSettingsModal() { document.getElementById('settingsModal').style.display = 'none'; }
function openModal() { document.getElementById('uploadModal').style.display = 'flex'; }
function closeModal() { document.getElementById('uploadModal').style.display = 'none'; }
function openHistoryModal() { loadHistoryUI(); document.getElementById('historyModal').style.display = 'flex'; }
function closeHistoryModal() { document.getElementById('historyModal').style.display = 'none'; }
function scrollToTop() { document.querySelector('.app-body').scrollTo({ top: 0, behavior: 'smooth' }); }

// PDF Export Functionality
function downloadPDF() {
    if (!filteredData.length) return;
    const { jsPDF } = window.jspdf; const doc = new jsPDF('p', 'pt', 'a4');
    doc.text("Live Inventory Status Report", 40, 40);
    doc.autoTable({
        head: [["Code", "Item Name", "Opening", "In", "Out", "Return", "Closing Stock"]],
        body: filteredData.map(i => [i.matCode, i.matName, i.openingStock, i.receipt, i.issues, i.returnQty, i.closingStock]),
        startY: 60, theme: 'grid'
    });
    doc.save(`Inventory_Report.pdf`);
}
