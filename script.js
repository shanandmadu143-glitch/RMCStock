"use strict";

// --- FIREBASE CONFIGURATION (මෙතැනට ඔබගේ Firebase විස්තර ඇතුළත් කරන්න) ---
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    databaseURL: "https://YOUR_PROJECT_ID-default-rtdb.firebaseio.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID"
};

let firebaseInitialized = false;
let dbRef = null;

try {
    if (firebaseConfig.apiKey !== "YOUR_API_KEY") {
        firebase.initializeApp(firebaseConfig);
        firebase.database().enableLogging(false);
        dbRef = firebase.database().ref("bincard_live_data");
        firebaseInitialized = true;
    }
} catch (e) {
    console.warn("Firebase Init Warning:", e);
}

let binCardData = [];
let filteredData = [];
const PAGE_SIZE = 50;
let currentPage = 1;
let confirmCallback = null;
let showDetailedStats = false;
let currentFileId = null;
let offlineTimer = null;

// --- OFFLINE & ONLINE LIVE LISTENERS ---
function updateOnlineStatusUI(isOnline) {
    const badge = document.getElementById('liveStatusBadge');
    if (badge) {
        if (isOnline && firebaseInitialized) {
            badge.className = "status-chip online";
            badge.innerHTML = `<i class="fas fa-wifi"></i> Live Sync`;
        } else if (isOnline) {
            badge.className = "status-chip online";
            badge.innerHTML = `<i class="fas fa-check"></i> Online`;
        } else {
            badge.className = "status-chip offline";
            badge.innerHTML = `<i class="fas fa-circle"></i> Offline`;
        }
    }
}

function triggerOfflineNotice() {
    const notice = document.getElementById('offlineNotice');
    if (!notice) return;
    notice.classList.add('show');
    clearTimeout(offlineTimer);
    offlineTimer = setTimeout(() => { notice.classList.remove('show'); }, 4000);
}

window.addEventListener('offline', () => {
    updateOnlineStatusUI(false);
    triggerOfflineNotice();
    showToast("අන්තර්ජාල සම්බන්ධතාවය බිඳවැටුණි. Offline දත්ත සුරැකේ.", "error", "Offline Mode");
});

window.addEventListener('online', () => {
    updateOnlineStatusUI(true);
    const notice = document.getElementById('offlineNotice');
    if (notice) notice.classList.remove('show');
    showToast("සම්බන්ධතාවය ලැබුණි. Cloud Sync වෙමින් පවතී...", "success", "Online Mode");
    syncLocalToCloud();
});

// --- INDEXEDDB STORAGE (OFFLINE LOCAL DATABASE) ---
const DB_NAME = 'BinCardHistoryDB';
const DB_VERSION = 1;
let db;

function initDB() {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open(DB_NAME, DB_VERSION);
        request.onupgradeneeded = (e) => {
            const database = e.target.result;
            if (!database.objectStoreNames.contains('metadata')) database.createObjectStore('metadata', { keyPath: "id", autoIncrement: true });
            if (!database.objectStoreNames.contains('datasets')) database.createObjectStore('datasets', { keyPath: "id" });
        };
        request.onsuccess = (e) => { db = e.target.result; resolve(db); };
        request.onerror = (e) => reject("DB Error: " + e.target.error);
    });
}

function saveUploadToDB(filename, dataArray) {
    return new Promise((resolve, reject) => {
        const transaction = db.transaction(['metadata', 'datasets'], "readwrite");
        const metaStore = transaction.objectStore('metadata');
        const dataStore = transaction.objectStore('datasets');
        
        const metaRecord = { filename: filename, timestamp: Date.now() };
        const addMetaReq = metaStore.add(metaRecord);

        addMetaReq.onsuccess = (e) => {
            const newId = e.target.result;
            dataStore.add({ id: newId, data: dataArray });
            resolve({ id: newId, filename });
        };
        transaction.onerror = (e) => reject(e.target.error);
    });
}

function getAllHistory() {
    return new Promise((resolve, reject) => {
        const transaction = db.transaction(['metadata'], "readonly");
        const request = transaction.objectStore('metadata').getAll();
        request.onsuccess = () => {
            const res = request.result || [];
            res.sort((a, b) => b.timestamp - a.timestamp);
            resolve(res);
        };
        request.onerror = (e) => reject(e.target.error);
    });
}

function loadDatasetFromDB(id) {
    return new Promise((resolve, reject) => {
        const transaction = db.transaction(['datasets'], "readonly");
        const request = transaction.objectStore('datasets').get(id);
        request.onsuccess = () => resolve(request.result ? request.result.data : null);
        request.onerror = (e) => reject(e.target.error);
    });
}

function deleteFileFromDB(id) {
    return new Promise((resolve, reject) => {
        const transaction = db.transaction(['metadata', 'datasets'], "readwrite");
        transaction.objectStore('metadata').delete(id);
        transaction.objectStore('datasets').delete(id);
        transaction.oncomplete = () => resolve();
        transaction.onerror = (e) => reject(e.target.error);
    });
}

// --- REALTIME CLOUD LIVE SYNC ---
function setupFirebaseRealtimeListener() {
    if (!firebaseInitialized || !dbRef) return;

    dbRef.on("value", (snapshot) => {
        const val = snapshot.val();
        if (val && val.items) {
            const cloudFileName = val.filename || "Live Cloud File";
            processAndDisplayItems(val.items, cloudFileName);
            updateOnlineStatusUI(true);
        }
    });
}

async function syncLocalToCloud() {
    if (!firebaseInitialized || !navigator.onLine || !dbRef || !currentFileId) return;
    
    const data = await loadDatasetFromDB(currentFileId);
    const filename = document.getElementById('activeFileName').innerText;
    if (data) {
        dbRef.set({
            filename: filename,
            items: data,
            updatedAt: Date.now()
        });
    }
}

// --- TOAST NOTIFICATIONS ---
function showToast(message, type = 'success', title = '') {
    const container = document.getElementById('toast-container');
    if (!container) return;
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    
    let icon = type === 'error' ? 'fa-exclamation-circle' : 'fa-check-circle';
    toast.innerHTML = `
        <i class="fas ${icon} toast-icon"></i>
        <div class="toast-content">
            <h5>${escapeHtml(title || (type === 'error' ? 'Error' : 'Success'))}</h5>
            <p>${escapeHtml(message)}</p>
        </div>
    `;
    container.appendChild(toast);
    setTimeout(() => { toast.classList.add('fade-out'); setTimeout(() => toast.remove(), 300); }, 3000);
}

function showConfirmModal(title, message, onConfirm) {
    document.getElementById('confirmTitle').innerText = title;
    document.getElementById('confirmMessage').innerText = message;
    confirmCallback = onConfirm;
    document.getElementById('confirmModal').style.display = 'flex';
}

function closeConfirmModal(result) {
    document.getElementById('confirmModal').style.display = 'none';
    if (result && typeof confirmCallback === 'function') confirmCallback();
    confirmCallback = null;
}

// --- APP INIT ---
window.addEventListener('load', () => {
    updateOnlineStatusUI(navigator.onLine);
    if (!navigator.onLine) triggerOfflineNotice();

    const progressBar = document.getElementById('splashProgressBar');
    const splashScreen = document.getElementById('splash-screen');
    let elapsed = 0;
    const timer = setInterval(() => {
        elapsed += 50;
        if (progressBar) progressBar.style.width = Math.min((elapsed / 2500) * 100, 100) + '%';
        if (elapsed >= 2500) {
            clearInterval(timer);
            if (splashScreen) {
                splashScreen.classList.add('fade-out');
                setTimeout(() => { splashScreen.style.display = 'none'; }, 500);
            }
        }
    }, 50);
});

document.addEventListener('DOMContentLoaded', async () => {
    const savedTheme = localStorage.getItem('binCardTheme') || 'default';
    setTheme(savedTheme, false);
    setupDragAndDrop();

    try {
        await initDB();
        setupFirebaseRealtimeListener();
        await initializeApp();
    } catch (e) {
        showEmptyState();
    }

    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal-overlay')) {
            closeModal(); closeSettingsModal(); closeConfirmModal(false); closeHistoryModal();
        }
    });
});

async function initializeApp() {
    const history = await getAllHistory();
    if (history.length > 0) {
        const savedIdStr = localStorage.getItem('activeBinCardFileId');
        let targetId = savedIdStr ? parseInt(savedIdStr) : history[0].id;
        const targetMeta = history.find(h => h.id === targetId) || history[0];
        await loadFileIntoView(targetMeta.id, targetMeta.filename);
    } else {
        showEmptyState();
    }
}

function setTheme(themeName, save = true) {
    document.body.className = `theme-${themeName}`;
    if (save) {
        localStorage.setItem('binCardTheme', themeName);
        closeSettingsModal();
        showToast("Theme updated successfully", "success");
    }
}

function openSettingsModal() { document.getElementById('settingsModal').style.display = 'flex'; }
function closeSettingsModal() { document.getElementById('settingsModal').style.display = 'none'; }
function openModal() { document.getElementById('uploadModal').style.display = 'flex'; }
function closeModal() { document.getElementById('uploadModal').style.display = 'none'; }
function openHistoryModal() { loadHistoryUI(); document.getElementById('historyModal').style.display = 'flex'; }
function closeHistoryModal() { document.getElementById('historyModal').style.display = 'none'; }
function scrollToTop() { document.querySelector('.app-body').scrollTo({ top: 0, behavior: 'smooth' }); }

function escapeHtml(str) {
    if (str === null || str === undefined) return '';
    return String(str).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

function parseNum(val) {
    if (val === undefined || val === null || val === '') return 0;
    if (typeof val === 'number') return isNaN(val) ? 0 : val;
    let str = String(val).trim().replace(/,/g, '');
    if (str.startsWith('(') && str.endsWith(')')) str = '-' + str.substring(1, str.length - 1);
    const parsed = parseFloat(str);
    return isNaN(parsed) ? 0 : parsed;
}

function formatNumber(num) { return num.toLocaleString('en-US', { maximumFractionDigits: 2 }); }

function toggleDetailedStats() {
    showDetailedStats = !showDetailedStats;
    document.getElementById('statCardReceived').style.display = showDetailedStats ? 'flex' : 'none';
    document.getElementById('statCardIssues').style.display = showDetailedStats ? 'flex' : 'none';
    document.getElementById('statCardStock').style.display = showDetailedStats ? 'flex' : 'none';
    document.getElementById('toggleStatsText').innerText = showDetailedStats ? 'Hide Stats' : 'Extra Stats';
}

// --- HISTORY LOGIC ---
async function loadHistoryUI() {
    const container = document.getElementById('historyListContainer');
    container.innerHTML = '<div style="text-align:center;"><i class="fas fa-spinner fa-spin"></i> Loading...</div>';
    
    try {
        const history = await getAllHistory();
        if (history.length === 0) {
            container.innerHTML = '<div style="text-align:center; color:var(--text-light);">No uploaded files found.</div>';
            return;
        }

        let html = '';
        history.forEach(item => {
            const dateStr = new Date(item.timestamp).toLocaleDateString();
            const isActive = (item.id === currentFileId);
            
            html += `
                <div class="history-item">
                    <div class="history-info">
                        <h4><i class="fas fa-file-excel" style="color:var(--success);"></i> ${escapeHtml(item.filename)}</h4>
                        <p>${dateStr} ${isActive ? ' <strong>(Active)</strong>' : ''}</p>
                    </div>
                    <div style="display:flex; gap:6px;">
                        ${!isActive ? `<button class="chip-btn" onclick="loadFileIntoView(${item.id}, '${escapeHtml(item.filename)}')">Open</button>` : ''}
                        <button class="icon-btn danger" onclick="confirmDeleteHistoryItem(${item.id}, '${escapeHtml(item.filename)}')"><i class="fas fa-trash"></i></button>
                    </div>
                </div>
            `;
        });
        container.innerHTML = html;
    } catch (e) {
        container.innerHTML = 'Error loading history.';
    }
}

function processAndDisplayItems(rawItems, filename) {
    // 1. Calculate Closing Stock correctly: Opening + In(Rec) - Out(Iss) + Return
    // 2. Hide items where In(Rec), Out(Iss), and Return are ALL 0 or missing
    binCardData = rawItems
        .map(item => {
            const op = parseNum(item.openingStock);
            const rec = parseNum(item.receipt);
            const iss = parseNum(item.issues);
            const ret = parseNum(item.returnQty);
            return {
                ...item,
                openingStock: op,
                receipt: rec,
                issues: iss,
                returnQty: ret,
                closingStock: op + rec - iss + ret
            };
        })
        .filter(item => item.receipt !== 0 || item.issues !== 0 || item.returnQty !== 0);

    filteredData = [...binCardData];
    
    document.getElementById('searchInput').value = '';
    document.getElementById('activeFileName').innerText = filename;
    
    updateDashboardStats();
    toggleUIElements(true);
    renderCards(true);
}

async function loadFileIntoView(id, filename) {
    try {
        const data = await loadDatasetFromDB(id);
        if (data) {
            currentFileId = id;
            localStorage.setItem('activeBinCardFileId', id);
            
            processAndDisplayItems(data, filename);
            closeHistoryModal();
            showToast(`Loaded ${filename}`, 'success');

            // Synchronize with Cloud if online
            syncLocalToCloud();
        }
    } catch (e) {
        showToast("Error loading file", "error");
    }
}

function confirmDeleteHistoryItem(id, filename) {
    showConfirmModal("Delete File", `Delete '${filename}' permanently?`, async () => {
        await deleteFileFromDB(id);
        showToast("File deleted", "success");
        if (id === currentFileId) {
            currentFileId = null;
            localStorage.removeItem('activeBinCardFileId');
            showEmptyState();
        }
        loadHistoryUI();
    });
}

function confirmDeleteCurrentFile() {
    if (!currentFileId) return;
    const filename = document.getElementById('activeFileName').innerText;
    confirmDeleteHistoryItem(currentFileId, filename);
}

// --- FILE UPLOAD PROCESSING ---
function setupDragAndDrop() {
    const dropArea = document.getElementById('dropArea');
    if (!dropArea) return;
    ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(ev => dropArea.addEventListener(ev, e => { e.preventDefault(); e.stopPropagation(); }));
    dropArea.addEventListener('drop', e => { if (e.dataTransfer.files.length) handleFileUpload(e.dataTransfer.files[0]); });
    const fileInput = document.getElementById('fileInput');
    if (fileInput) {
        fileInput.addEventListener('change', e => {
            if (e.target.files.length) handleFileUpload(e.target.files[0]);
            e.target.value = '';
        });
    }
}

function handleFileUpload(file) {
    showToast("Processing spreadsheet...", "info");
    const reader = new FileReader();
    reader.onload = async (e) => {
        try {
            const data = new Uint8Array(e.target.result);
            const workbook = XLSX.read(data, { type: 'array' });
            const firstSheet = workbook.Sheets[workbook.SheetNames[0]];
            await processExcelData(firstSheet, file.name);
        } catch (error) {
            showToast("Invalid file format", "error");
        }
    };
    reader.readAsArrayBuffer(file);
}

async function processExcelData(worksheet, filename) {
    const rawData = XLSX.utils.sheet_to_json(worksheet, { header: 1, defval: "" });
    if (!rawData.length) { showToast("Spreadsheet is empty", "error"); return; }

    let parsedItems = [];
    let headerRowIndex = -1;
    let colMap = { code: -1, name: -1, opening: -1, receipt: -1, issue: -1, returnQty: -1, closing: -1 };

    const keywords = {
        code: [/code/i, /matcode/i, /item code/i, /කේතය/i, /\bid\b/i, /part no/i],
        name: [/description/i, /item name/i, /material name/i, /details/i, /විස්තරය/i, /\bname\b/i],
        opening: [/opening/i, /b\/f/i, /beginning/i, /මුල් ශේෂය/i, /prev/i, /op\.?\s*stock/i],
        receipt: [/received/i, /receipt/i, /\bin\b/i, /ලැබීම්/i, /purchase/i, /rec\b/i],
        issue: [/issued/i, /issue/i, /\bout\b/i, /නිකුත්/i, /sales/i, /iss\b/i],
        returnQty: [/return/i, /ආපසු/i, /ret\b/i],
        closing: [/closing/i, /balance/i, /stock/i, /ශේෂය/i, /on hand/i]
    };

    for (let i = 0; i < Math.min(30, rawData.length); i++) {
        let row = rawData[i];
        if (!Array.isArray(row)) continue;
        let tempMap = { code: -1, name: -1, opening: -1, receipt: -1, issue: -1, returnQty: -1, closing: -1 };
        let matches = 0;

        row.forEach((cell, idx) => {
            let text = String(cell).trim();
            if (!text) return;
            for (let key in keywords) {
                if (tempMap[key] === -1 && keywords[key].some(rx => rx.test(text))) {
                    tempMap[key] = idx; matches++; break;
                }
            }
        });
        if (matches >= 2) { headerRowIndex = i; colMap = tempMap; break; }
    }

    if (headerRowIndex === -1) {
        headerRowIndex = 0; colMap = { code: 0, name: 1, opening: 2, receipt: 3, issue: 4, returnQty: 5, closing: 6 };
    }

    for (let i = headerRowIndex + 1; i < rawData.length; i++) {
        let row = rawData[i];
        if (!row || !row.length) continue;

        let code = colMap.code !== -1 && row[colMap.code] !== undefined ? String(row[colMap.code]).trim() : `ITM-${i}`;
        let name = colMap.name !== -1 && row[colMap.name] !== undefined ? String(row[colMap.name]).trim() : "";
        if (!code && !name) continue;

        let openNum = parseNum(colMap.opening !== -1 ? row[colMap.opening] : 0);
        let rNum = parseNum(colMap.receipt !== -1 ? row[colMap.receipt] : 0);
        let iNum = parseNum(colMap.issue !== -1 ? row[colMap.issue] : 0);
        let retNum = parseNum(colMap.returnQty !== -1 ? row[colMap.returnQty] : 0);
        
        // Hide if In, Out, and Return are all 0
        if (rNum === 0 && iNum === 0 && retNum === 0) continue;
        if (!name) name = code;

        let calculatedClosingStock = openNum + rNum - iNum + retNum;

        parsedItems.push({ 
            matCode: code, 
            matName: name, 
            openingStock: openNum, 
            receipt: rNum, 
            issues: iNum, 
            returnQty: retNum, 
            closingStock: calculatedClosingStock 
        });
    }

    if (!parsedItems.length) { showToast("No valid items found", "error"); return; }

    const result = await saveUploadToDB(filename, parsedItems);
    await loadFileIntoView(result.id, result.filename);
    closeModal();
}

// --- UI RENDERING ---
function toggleUIElements(hasData) {
    document.getElementById('dashboardStats').style.display = hasData ? 'grid' : 'none';
    document.getElementById('controlsBar').style.display = hasData ? 'flex' : 'none';
    document.getElementById('searchContainer').style.display = hasData ? 'block' : 'none';
    document.getElementById('btnClearData').style.display = hasData ? 'flex' : 'none';
    document.getElementById('btnDownloadPdf').style.display = hasData ? 'flex' : 'none';
}

function updateDashboardStats() {
    document.getElementById('statTotalItems').innerText = formatNumber(binCardData.length);
    const totalRec = binCardData.reduce((sum, item) => sum + parseNum(item.receipt), 0);
    const totalIss = binCardData.reduce((sum, item) => sum + parseNum(item.issues), 0);
    const totalStock = binCardData.reduce((sum, item) => sum + parseNum(item.closingStock), 0);

    document.getElementById('statTotalReceived').innerText = formatNumber(totalRec);
    document.getElementById('statTotalIssues').innerText = formatNumber(totalIss);
    document.getElementById('statTotalStock').innerText = formatNumber(totalStock);
}

function handleSearch() {
    const query = document.getElementById('searchInput').value.toLowerCase().trim();
    if (query === '') filteredData = [...binCardData];
    else filteredData = binCardData.filter(item => item.matCode.toLowerCase().includes(query) || item.matName.toLowerCase().includes(query));
    renderCards(true);
}

function renderCards(resetPage = false) {
    const container = document.getElementById('cardContainer');
    const loadMoreBtn = document.getElementById('loadMoreContainer');
    if (!container) return;

    if (resetPage) { currentPage = 1; container.innerHTML = ''; }

    if (!filteredData.length) {
        container.innerHTML = `<div class="empty-state"><i class="fas fa-search"></i><h3>No items match</h3></div>`;
        if (loadMoreBtn) loadMoreBtn.style.display = 'none';
        return;
    }

    const startIdx = (currentPage - 1) * PAGE_SIZE;
    const endIdx = Math.min(startIdx + PAGE_SIZE, filteredData.length);
    const items = filteredData.slice(startIdx, endIdx);
    const fragment = document.createDocumentFragment();

    items.forEach(item => {
        const card = document.createElement('div'); card.className = 'card';
        let badgeHTML = item.closingStock <= 0 ? '<span class="badge badge-danger">Out</span>' : 
                        item.closingStock < 10 ? '<span class="badge badge-warning">Low</span>' : 
                        '<span class="badge badge-success">In Stock</span>';

        card.innerHTML = `
            ${badgeHTML}
            <div class="mat-code"><i class="fas fa-barcode"></i> ${escapeHtml(item.matCode)}</div>
            <div class="mat-name">${escapeHtml(item.matName)}</div>
            <div class="data-grid">
                <div class="data-item"><span class="d-label">Op. Stock</span><span class="d-value">${formatNumber(item.openingStock || 0)}</span></div>
                <div class="data-item"><span class="d-label">In (Rec)</span><span class="d-value" style="color:var(--success);">${formatNumber(item.receipt)}</span></div>
                <div class="data-item"><span class="d-label">Out (Iss)</span><span class="d-value" style="color:var(--danger);">${formatNumber(item.issues)}</span></div>
                <div class="data-item"><span class="d-label">Return</span><span class="d-value">${formatNumber(item.returnQty)}</span></div>
            </div>
            <div class="stock-total"><span class="d-label">Closing Stock</span><span class="d-value">${formatNumber(item.closingStock)}</span></div>
        `;
        fragment.appendChild(card);
    });

    container.appendChild(fragment);
    if (loadMoreBtn) loadMoreBtn.style.display = endIdx < filteredData.length ? 'block' : 'none';
}

function loadMoreCards() { currentPage++; renderCards(false); }

function showEmptyState() {
    toggleUIElements(false);
    const container = document.getElementById('cardContainer');
    if (container) {
        container.innerHTML = `
            <div class="empty-state">
                <i class="fas fa-folder-open"></i>
                <h3>No Data Available</h3>
                <p>Upload an Excel spreadsheet from the bottom navigation bar.</p>
            </div>
        `;
    }
}

// --- PDF EXPORT ---
function downloadPDF() {
    if (!filteredData.length) return;
    try {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF('p', 'pt', 'a4');
        const filename = document.getElementById('activeFileName').innerText;
        
        doc.setFontSize(16); doc.text("Bin Card Inventory Report", 40, 40);
        doc.setFontSize(10); doc.text(`File: ${filename}`, 40, 55);

        const tableRows = filteredData.map(item => [
            item.matCode, item.matName, formatNumber(item.openingStock || 0), formatNumber(item.receipt), formatNumber(item.issues), formatNumber(item.returnQty), formatNumber(item.closingStock)
        ]);

        doc.autoTable({
            head: [["Code", "Item Name", "Op. Stock", "In", "Out", "Returns", "Closing"]],
            body: tableRows, startY: 70, theme: 'grid'
        });
        
        doc.save(`BinCard_${filename}.pdf`);
        showToast("PDF exported", "success");
    } catch (e) {
        showToast("PDF Export failed", "error");
    }
}
