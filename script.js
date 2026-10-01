"use strict";

// --- FIREBASE CONFIGURATION ---
const firebaseConfig = {
    apiKey: "BBneNawI8K7LZKidLsAIKAb_FGRJZk-j_KPan_mvheez-Ei023aR98OdIvd0EqdFKHoBurzzynDBC3QBigPYgx8",
    authDomain: "bin-card-42614.firebaseapp.com",
    projectId: "bin-card-42614",
    storageBucket: "bin-card-42614.appspot.com",
    messagingSenderId: "123456789012",
    appId: "1:123456789012:web:abcdef123456"
};

// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
const db = firebase.firestore();

// App State
let binCardData = [];
let filteredData = [];
const PAGE_SIZE = 50;
let currentPage = 1;
let confirmCallback = null;
let showDetailedStats = false;
let currentFileId = null;
let offlineTimer = null;
let cloudDatasetsList = [];

// Helper: Safe Number Parsing
function parseNum(val) {
    if (val === undefined || val === null || val === '') return 0;
    if (typeof val === 'number') return isNaN(val) ? 0 : val;
    let str = String(val).trim().replace(/,/g, '');
    if (str.startsWith('(') && str.endsWith(')')) {
        str = '-' + str.substring(1, str.length - 1);
    }
    const parsed = parseFloat(str);
    return isNaN(parsed) ? 0 : parsed;
}

function formatNumber(num) {
    return parseNum(num).toLocaleString('en-US', { maximumFractionDigits: 2 });
}

function escapeHtml(str) {
    if (str === null || str === undefined) return '';
    return String(str)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");
}

// UI Cloud Status
function setCloudStatus(status, text) {
    const badge = document.getElementById('cloudStatusBadge');
    if (!badge) return;

    if (status === 'syncing') {
        badge.style.background = 'var(--primary-container)';
        badge.style.color = 'var(--primary)';
        badge.innerHTML = `<i class="fas fa-sync fa-spin"></i> <span>${text || 'Syncing...'}</span>`;
    } else if (status === 'online') {
        badge.style.background = '#dcfce7';
        badge.style.color = '#16a34a';
        badge.innerHTML = `<i class="fas fa-cloud"></i> <span>${text || 'Cloud Synced'}</span>`;
    } else if (status === 'offline') {
        badge.style.background = '#fee2e2';
        badge.style.color = '#dc2626';
        badge.innerHTML = `<i class="fas fa-wifi-slash"></i> <span>${text || 'Offline'}</span>`;
    }
}

// Offline Notification
function triggerOfflineNotice() {
    const notice = document.getElementById('offlineNotice');
    if (!notice) return;
    notice.classList.add('show');
    clearTimeout(offlineTimer);
    offlineTimer = setTimeout(() => { notice.classList.remove('show'); }, 4000);
}

window.addEventListener('offline', () => {
    triggerOfflineNotice();
    setCloudStatus('offline', 'Offline');
    showToast("අන්තර්ජාල සම්බන්ධතාවය බිඳවැටුණි.", "error", "Offline");
});

window.addEventListener('online', () => {
    const notice = document.getElementById('offlineNotice');
    if (notice) notice.classList.remove('show');
    setCloudStatus('online', 'Cloud Synced');
    showToast("අන්තර්ජාල සම්බන්ධතාවය ලැබුණි.", "success", "Online");
});

// --- REALTIME CLOUD FIRESTORE SYNC ---
function setupCloudRealtimeListener() {
    setCloudStatus('syncing', 'Connecting Cloud...');
    
    db.collection("bin_card_files").orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        cloudDatasetsList = [];
        snapshot.forEach((doc) => {
            cloudDatasetsList.push({ id: doc.id, ...doc.data() });
        });

        setCloudStatus('online', 'Cloud Synced');

        if (cloudDatasetsList.length > 0) {
            const savedId = localStorage.getItem('activeBinCardCloudFileId');
            let targetDoc = cloudDatasetsList.find(d => d.id === savedId) || cloudDatasetsList[0];
            displayCloudDataset(targetDoc);
        } else {
            showEmptyState();
        }

        if (document.getElementById('historyModal').style.display === 'flex') {
            renderHistoryListUI();
        }
    }, (error) => {
        console.error("Firestore Error: ", error);
        setCloudStatus('offline', 'Check Connection');
        showToast("Cloud Connection Error!", "error");
    });
}

function displayCloudDataset(docItem) {
    currentFileId = docItem.id;
    localStorage.setItem('activeBinCardCloudFileId', docItem.id);

    const rawData = docItem.data || [];
    
    // Formula: Closing Stock = Opening Stock + Received - Issued + Return Qty
    binCardData = rawData.map(item => {
        const open = parseNum(item.openingStock);
        const rec = parseNum(item.receipt);
        const iss = parseNum(item.issues);
        const ret = parseNum(item.returnQty);
        const closing = open + rec - iss + ret;

        return {
            matCode: item.matCode || '',
            matName: item.matName || item.matCode || 'Unknown Item',
            openingStock: open,
            receipt: rec,
            issues: iss,
            returnQty: ret,
            closingStock: closing
        };
    }).filter(item => item.matCode !== '' || item.matName !== '');

    filteredData = [...binCardData];

    document.getElementById('searchInput').value = '';
    document.getElementById('activeFileName').innerText = docItem.filename || 'Cloud Spreadsheet';

    updateDashboardStats();
    toggleUIElements(true);
    renderCards(true);
}

async function uploadSpreadsheetToCloud(filename, parsedItems) {
    setCloudStatus('syncing', 'Uploading...');
    showToast("Cloud එකට Upload වෙමින් පවතී...", "info");

    try {
        const docRef = await db.collection("bin_card_files").add({
            filename: filename,
            timestamp: Date.now(),
            itemCount: parsedItems.length,
            data: parsedItems
        });

        localStorage.setItem('activeBinCardCloudFileId', docRef.id);
        setCloudStatus('online', 'Cloud Synced');
        showToast("Cloud එකට සාර්ථකව Upload විය!", "success");
        closeModal();
    } catch (err) {
        console.error("Upload Error:", err);
        showToast("Cloud Upload කිරීම අසාර්ථක විය: " + err.message, "error");
        setCloudStatus('offline', 'Upload Error');
    }
}

async function deleteCloudSpreadsheet(id) {
    try {
        await db.collection("bin_card_files").doc(id).delete();
        showToast("Cloud File එක ඉවත් කරන ලදී", "success");
        if (currentFileId === id) {
            currentFileId = null;
            localStorage.removeItem('activeBinCardCloudFileId');
        }
    } catch (e) {
        showToast("Delete කිරීමට නොහැකි විය: " + e.message, "error");
    }
}

// --- TOAST NOTIFICATIONS ---
function showToast(message, type = 'success', title = '') {
    const container = document.getElementById('toast-container');
    if (!container) return;
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    
    let icon = type === 'error' ? 'fa-exclamation-circle' : (type === 'info' ? 'fa-info-circle' : 'fa-check-circle');
    toast.innerHTML = `
        <i class="fas ${icon} toast-icon"></i>
        <div class="toast-content">
            <h5>${escapeHtml(title || (type === 'error' ? 'Error' : (type === 'info' ? 'Notice' : 'Success')))}</h5>
            <p>${escapeHtml(message)}</p>
        </div>
    `;
    container.appendChild(toast);
    setTimeout(() => { 
        toast.classList.add('fade-out'); 
        setTimeout(() => toast.remove(), 300); 
    }, 3000);
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
    if (!navigator.onLine) triggerOfflineNotice();

    const progressBar = document.getElementById('splashProgressBar');
    const splashScreen = document.getElementById('splash-screen');
    let elapsed = 0;
    const timer = setInterval(() => {
        elapsed += 50;
        if (progressBar) progressBar.style.width = Math.min((elapsed / 2000) * 100, 100) + '%';
        if (elapsed >= 2000) {
            clearInterval(timer);
            if (splashScreen) {
                splashScreen.classList.add('fade-out');
                setTimeout(() => { splashScreen.style.display = 'none'; }, 500);
            }
        }
    }, 50);
});

document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('binCardTheme') || 'default';
    setTheme(savedTheme, false);
    setupDragAndDrop();
    
    setupCloudRealtimeListener();

    window.addEventListener('click', (e) => {
        if (e.target.classList.contains('modal-overlay')) {
            closeModal(); closeSettingsModal(); closeConfirmModal(false); closeHistoryModal();
        }
    });
});

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
function openHistoryModal() { renderHistoryListUI(); document.getElementById('historyModal').style.display = 'flex'; }
function closeHistoryModal() { document.getElementById('historyModal').style.display = 'none'; }
function scrollToTop() { document.querySelector('.app-body').scrollTo({ top: 0, behavior: 'smooth' }); }

function toggleDetailedStats() {
    showDetailedStats = !showDetailedStats;
    document.getElementById('statCardReceived').style.display = showDetailedStats ? 'flex' : 'none';
    document.getElementById('statCardIssues').style.display = showDetailedStats ? 'flex' : 'none';
    document.getElementById('statCardStock').style.display = showDetailedStats ? 'flex' : 'none';
    document.getElementById('toggleStatsText').innerText = showDetailedStats ? 'Hide Stats' : 'Extra Stats';
}

// --- CLOUD FILES LIST UI ---
function renderHistoryListUI() {
    const container = document.getElementById('historyListContainer');
    if (cloudDatasetsList.length === 0) {
        container.innerHTML = '<div style="text-align:center; color:var(--text-light); padding:20px;">Cloud එකේ Files නොමැත. File එකක් Upload කරන්න.</div>';
        return;
    }

    let html = '';
    cloudDatasetsList.forEach(item => {
        const dateStr = new Date(item.timestamp).toLocaleDateString();
        const isActive = (item.id === currentFileId);
        
        html += `
            <div class="history-item">
                <div class="history-info">
                    <h4><i class="fas fa-cloud" style="color:var(--primary);"></i> ${escapeHtml(item.filename)}</h4>
                    <p>${dateStr} - ${item.itemCount || 0} Items ${isActive ? ' <strong>(Active)</strong>' : ''}</p>
                </div>
                <div style="display:flex; gap:6px;">
                    ${!isActive ? `<button class="chip-btn" onclick="selectCloudFile('${item.id}')">Open</button>` : ''}
                    <button class="icon-btn danger" onclick="confirmDeleteCloudItem('${item.id}', '${escapeHtml(item.filename)}')"><i class="fas fa-trash"></i></button>
                </div>
            </div>
        `;
    });
    container.innerHTML = html;
}

function selectCloudFile(id) {
    const target = cloudDatasetsList.find(c => c.id === id);
    if (target) {
        displayCloudDataset(target);
        closeHistoryModal();
        showToast(`Opened ${target.filename}`, 'success');
    }
}

function confirmDeleteCloudItem(id, filename) {
    showConfirmModal("Delete Cloud File", `"${filename}" අන්තර්ජාලයෙන් සහ අනෙකුත් සියලුම Phone වලින් මුළුමනින්ම Delete කිරීමට අවශ්‍යද?`, async () => {
        await deleteCloudSpreadsheet(id);
        renderHistoryListUI();
    });
}

function confirmDeleteCurrentFile() {
    if (!currentFileId) return;
    const filename = document.getElementById('activeFileName').innerText;
    confirmDeleteCloudItem(currentFileId, filename);
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
    showToast("Spreadsheet එක කියවමින් පවතී...", "info");
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
        opening: [/opening/i, /b\/f/i, /beginning/i, /මුල්/i, /op stock/i, /op\. stock/i],
        receipt: [/received/i, /receipt/i, /\bin\b/i, /ලැබීම්/i, /purchase/i, /rec/i],
        issue: [/issued/i, /issue/i, /\bout\b/i, /නිකුත්/i, /sales/i, /iss/i],
        returnQty: [/return/i, /ආපසු/i, /ret\b/i],
        closing: [/closing/i, /balance/i, /ශේෂය/i, /cl stock/i, /cl\. stock/i]
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
        headerRowIndex = 0; 
        colMap = { code: 0, name: 1, opening: 2, receipt: 3, issue: 4, returnQty: 5, closing: 6 };
    }

    for (let i = headerRowIndex + 1; i < rawData.length; i++) {
        let row = rawData[i];
        if (!row || !row.length) continue;

        let code = colMap.code !== -1 && row[colMap.code] !== undefined ? String(row[colMap.code]).trim() : `ITM-${i}`;
        let name = colMap.name !== -1 && row[colMap.name] !== undefined ? String(row[colMap.name]).trim() : "";
        
        if (!code && !name) continue;
        if (!name) name = code;

        let openNum = parseNum(colMap.opening !== -1 ? row[colMap.opening] : 0);
        let rNum = parseNum(colMap.receipt !== -1 ? row[colMap.receipt] : 0);
        let iNum = parseNum(colMap.issue !== -1 ? row[colMap.issue] : 0);
        let retNum = parseNum(colMap.returnQty !== -1 ? row[colMap.returnQty] : 0);

        // Equation: Closing Stock = Opening Stock + Received - Issued + Return Qty
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

    await uploadSpreadsheetToCloud(filename, parsedItems);
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
    if (query === '') {
        filteredData = [...binCardData];
    } else {
        filteredData = binCardData.filter(item => 
            item.matCode.toLowerCase().includes(query) || 
            item.matName.toLowerCase().includes(query)
        );
    }
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
        const card = document.createElement('div'); 
        card.className = 'card';
        
        let badgeHTML = item.closingStock <= 0 ? '<span class="badge badge-danger">Out</span>' : 
                        item.closingStock < 10 ? '<span class="badge badge-warning">Low</span>' : 
                        '<span class="badge badge-success">In Stock</span>';

        card.innerHTML = `
            ${badgeHTML}
            <div class="mat-code"><i class="fas fa-barcode"></i> ${escapeHtml(item.matCode)}</div>
            <div class="mat-name">${escapeHtml(item.matName)}</div>
            <div class="data-grid">
                <div class="data-item"><span class="d-label">Op. Stock</span><span class="d-value">${formatNumber(item.openingStock)}</span></div>
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
                <i class="fas fa-cloud-upload-alt"></i>
                <h3>Cloud Data එකක් නොමැත</h3>
                <p>පහළ Navigation Bar එකෙන් Excel Spreadsheet එකක් Upload කරන්න. එය ඕනෑම Phone එකකින් ලබාගත හැක.</p>
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
            item.matCode, 
            item.matName, 
            formatNumber(item.openingStock), 
            formatNumber(item.receipt), 
            formatNumber(item.issues), 
            formatNumber(item.returnQty), 
            formatNumber(item.closingStock)
        ]);

        doc.autoTable({
            head: [["Code", "Item Name", "Op. Stock", "In", "Out", "Returns", "Closing"]],
            body: tableRows, 
            startY: 70, 
            theme: 'grid'
        });
        
        doc.save(`BinCard_${filename}.pdf`);
        showToast("PDF exported successfully", "success");
    } catch (e) {
        showToast("PDF Export failed", "error");
    }
}
