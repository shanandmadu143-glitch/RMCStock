const i18n = {
  si: {
    lblSearch: '<i class="fa-solid fa-magnifying-glass"></i> Search by Name or Code:',
    placeholderSearch: 'සොයන්න Code හෝ Name ඇතුලත් කරන්න...',
    lblSection: '<i class="fa-solid fa-layer-group"></i> Select Section:',
    optReceipt: 'Receipt (ලැබීම්)',
    optIssues: 'Issues (නිකුත් කිරීම්)',
    optReturn: 'Return (නැවත භාරදීම්)',
    optSslI: 'Received to SSL (SSL ලැබීම්)',
    optSslJ: 'Sent to SSL (SSL යැවීම්)',
    optRejectionL: 'Rejection (ප්‍රතික්ෂේප කිරීම්)',
    optCounting: 'Counting (ගණනය කිරීම්)',
    lblAmount: '<i class="fa-solid fa-calculator"></i> ප්‍රමාණය ඇතුළත් කරන්න:',
    btnSave: '<i class="fa-solid fa-floppy-disk"></i> Save',
    titleExcel: 'Download File & Shift Stock',
    titleShare: 'Share Data File',
    txtSettingsTitle: '<i class="fa-solid fa-sliders" style="color:var(--primary);"></i> සැකසුම් (Settings)',
    lblLanguage: '<i class="fa-solid fa-language" style="color:var(--primary);"></i> භාෂාව තෝරන්න (Language):',
    lblTheme: '<i class="fa-solid fa-palette" style="color:var(--warning);"></i> Theme එක තෝරන්න:',
    lblRestore: '<i class="fa-solid fa-file-import" style="color:var(--success);"></i> Restore Excel (.xlsx) File:',
    descRestore: 'පෙර Save කරන ලද Excel File එකක් මගින් සියලුම විස්තර ගබඩා කරගන්න.',
    btnRestore: '<i class="fa-solid fa-upload"></i> Restore Excel Data',
    lblBackup: '<i class="fa-solid fa-file-export" style="color:var(--primary);"></i> Excel Backup එකක් ගන්න:',
    descBackup: 'වත්මන් දත්ත වල සුරක්ෂිත Backup එකක් ලබාගන්න.',
    btnBackup: '<i class="fa-solid fa-download"></i> Download Backup File',
    lblReset: '<i class="fa-solid fa-rotate-left" style="color:var(--danger);"></i> මුල් තත්වයට Reset කරන්න:',
    descReset: 'මුල් Default දත්ත ලබා ගැනීමට මෙම පද්ධතිය Reset කරන්න.',
    btnReset: '<i class="fa-solid fa-trash-can"></i> Reset All Data',
    lblFooter: 'Created By <span>Yomal Lakshan</span>',
    msgSelectMaterial: 'කරුණාකර Material Code එකක් හෝ Name එකක් තෝරන්න!',
    msgValidAmount: 'කරුණාකර වලංගු 0 ට වැඩි අංකයක් පමණක් ඇතුළත් කරන්න!',
    msgAdded: 'සාර්ථකව එකතු විය!',
    msgExcelShift: 'ගොනුව බාගත වූ අතර Stock එක යාවත්කාලීන විය!',
    msgRestoreSelect: 'කරුණාකර Excel File එකක් තෝරන්න!',
    msgRestoreSuccess: 'Excel Restore සාර්ථකයි!',
    msgResetConfirm: 'ඔබට නැවත මුල් දත්ත ලබා ගැනීමට අවශ්‍ය බව විශ්වාසද?'
  },
  en: {
    lblSearch: '<i class="fa-solid fa-magnifying-glass"></i> Search by Name or Code:',
    placeholderSearch: 'Type Code or Name to filter...',
    lblSection: '<i class="fa-solid fa-layer-group"></i> Select Section:',
    optReceipt: 'Receipt',
    optIssues: 'Issues',
    optReturn: 'Return',
    optSslI: 'Received to SSL',
    optSslJ: 'Sent to SSL',
    optRejectionL: 'Rejection',
    optCounting: 'Counting',
    lblAmount: '<i class="fa-solid fa-calculator"></i> Enter Amount:',
    btnSave: '<i class="fa-solid fa-floppy-disk"></i> Save',
    titleExcel: 'Download File & Shift Stock',
    titleShare: 'Share File',
    txtSettingsTitle: '<i class="fa-solid fa-sliders" style="color:var(--primary);"></i> Settings & Preferences',
    lblLanguage: '<i class="fa-solid fa-language" style="color:var(--primary);"></i> Select Language:',
    lblTheme: '<i class="fa-solid fa-palette" style="color:var(--warning);"></i> Choose Theme:',
    lblRestore: '<i class="fa-solid fa-file-import" style="color:var(--success);"></i> Restore Excel (.xlsx) File:',
    descRestore: 'Update current inventory using a previously saved Excel file.',
    btnRestore: '<i class="fa-solid fa-upload"></i> Restore Excel Data',
    lblBackup: '<i class="fa-solid fa-file-export" style="color:var(--primary);"></i> Export Excel Backup:',
    descBackup: 'Get a safe backup copy of current inventory data.',
    btnBackup: '<i class="fa-solid fa-download"></i> Download Backup File',
    lblReset: '<i class="fa-solid fa-rotate-left" style="color:var(--danger);"></i> Reset to Default Data:',
    descReset: 'Reset all records back to default starting items.',
    btnReset: '<i class="fa-solid fa-trash-can"></i> Reset All Data',
    lblFooter: 'Created By <span>Yomal Lakshan</span>',
    msgSelectMaterial: 'Please select a Material Code or Name!',
    msgValidAmount: 'Please enter a valid number greater than 0!',
    msgAdded: 'successfully added!',
    msgExcelShift: 'File downloaded and Stock shifted successfully!',
    msgRestoreSelect: 'Please select an Excel file!',
    msgRestoreSuccess: 'Excel Restore Successful!',
    msgResetConfirm: 'Are you sure you want to reset to default data?'
  }
};

let currentLang = localStorage.getItem('rmc_app_lang') || 'si';
let currentTheme = localStorage.getItem('rmc_app_theme') || 'light';
let inventory = []; 
let selectedIndex = -1;
let searchDebounceTimeout = null;
let currentExportMode = 'excel'; 
let currentlyEditingIndex = -1;

const defaultItems = [ 
  {type: "RM", code: "11067431", name: "SALT - FLOW", uom: "KG", op_stock: 11000, receipt: 0, issues: 0, return: 0, ssl_i: 0, ssl_j: 0, rejection_l: 0, counting: 0, packs_count: 0, rawData: {}}, 
  {type: "RM", code: "11061702", name: "WHITE SUGAR", uom: "KG", op_stock: 2500, receipt: 0, issues: 0, return: 0, ssl_i: 0, ssl_j: 0, rejection_l: 0, counting: 0, packs_count: 0, rawData: {}}, 
  {type: "RM", code: "11002301", name: "MONOSODIUM GLUTAMATE", uom: "KG", op_stock: 4525, receipt: 0, issues: 0, return: 0, ssl_i: 0, ssl_j: 0, rejection_l: 0, counting: 0, packs_count: 0, rawData: {}}
]; 

document.addEventListener('DOMContentLoaded', () => {
  loadInventoryData();
  applyTheme(currentTheme);
  applyLanguage(currentLang);
  setupEventListeners();
  updateCountingModeBadge();
});

function loadInventoryData() {
  const saved = localStorage.getItem('rmc_inventory_data');
  if (saved) {
    try {
      inventory = JSON.parse(saved);
      inventory = inventory.map(item => ({
        ...item,
        receipt: item.receipt || 0,
        issues: item.issues || 0,
        return: item.return || 0,
        ssl_i: item.ssl_i || 0,
        ssl_j: item.ssl_j || 0,
        rejection_l: item.rejection_l || 0,
        counting: item.counting || 0,
        packs_count: item.packs_count || 0,
        weight_kg: item.weight_kg || 0,
        pieces_count: item.pieces_count || 0,
        rawData: item.rawData || {}
      }));
    } catch (e) {
      inventory = JSON.parse(JSON.stringify(defaultItems));
    }
  } else {
    inventory = JSON.parse(JSON.stringify(defaultItems));
  }
}

function saveInventoryData() {
  localStorage.setItem('rmc_inventory_data', JSON.stringify(inventory));
}

function setupEventListeners() {
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const query = e.target.value.trim();
      const clearBtn = document.getElementById('clearSearchBtn');
      if (clearBtn) clearBtn.style.display = query.length > 0 ? 'flex' : 'none';

      clearTimeout(searchDebounceTimeout);
      searchDebounceTimeout = setTimeout(() => {
        handleSearch(query);
      }, 150);
    });
  }

  const todayModalSearch = document.getElementById('todayModalSearchInput');
  if (todayModalSearch) {
    todayModalSearch.addEventListener('input', () => {
      renderTodayUploadedList();
    });
  }

  const binCardSearch = document.getElementById('binCardSearchInput');
  if (binCardSearch) {
    binCardSearch.addEventListener('input', () => {
      renderBinCardUpdateViewList();
    });
  }

  document.addEventListener('click', (e) => {
    const searchContainer = document.querySelector('.search-input-container') || document.querySelector('.form-group');
    const resultsBox = document.getElementById('searchResults');
    if (resultsBox && !searchContainer.contains(e.target) && !document.getElementById('searchInput').contains(e.target)) {
      resultsBox.style.display = 'none';
    }
  });
}

function handleSearch(query) {
  const resultsBox = document.getElementById('searchResults');
  if (!resultsBox) return;

  if (!query) {
    resultsBox.style.display = 'none';
    resultsBox.innerHTML = '';
    return;
  }

  const lowerQuery = query.toLowerCase();
  const matched = inventory.filter(item => 
    item.code.toLowerCase().includes(lowerQuery) || item.name.toLowerCase().includes(lowerQuery)
  );

  if (matched.length === 0) {
    resultsBox.innerHTML = `<div class="search-item" style="color:var(--text-muted); justify-content:center;">No matching materials found</div>`;
    resultsBox.style.display = 'block';
    return;
  }

  let html = '';
  matched.forEach(item => {
    const originalIndex = inventory.findIndex(i => i.code === item.code);
    html += `
      <div class="search-item" onclick="selectMaterialByIndex(${originalIndex})">
        <div><strong>${item.code}</strong> - ${item.name}</div>
        <div style="font-size:0.8rem; color:var(--text-muted);">${item.uom} | Op: ${item.op_stock}</div>
      </div>
    `;
  });
  resultsBox.innerHTML = html;
  resultsBox.style.display = 'block';
}

function clearSearchInput() {
  const input = document.getElementById('searchInput');
  if (input) input.value = '';
  const clearBtn = document.getElementById('clearSearchBtn');
  if (clearBtn) clearBtn.style.display = 'none';
  const resultsBox = document.getElementById('searchResults');
  if (resultsBox) {
    resultsBox.style.display = 'none';
    resultsBox.innerHTML = '';
  }
  selectedIndex = -1;
  const badge = document.getElementById('selectedBadge');
  if (badge) badge.style.display = 'none';
}

function selectMaterialByIndex(index) {
  if (index < 0 || index >= inventory.length) return;
  selectedIndex = index;
  const item = inventory[index];

  const input = document.getElementById('searchInput');
  if (input) input.value = `${item.code} - ${item.name}`;

  const resultsBox = document.getElementById('searchResults');
  if (resultsBox) resultsBox.style.display = 'none';

  const clearBtn = document.getElementById('clearSearchBtn');
  if (clearBtn) clearBtn.style.display = 'flex';

  const badge = document.getElementById('selectedBadge');
  if (badge) {
    document.getElementById('dispCode').innerText = item.code;
    document.getElementById('dispName').innerText = item.name;
    document.getElementById('dispUom').innerText = item.uom;
    document.getElementById('dispClosing').innerText = calculateClosingStock(item);
    badge.style.display = 'block';
  }

  const amountInput = document.getElementById('inputAmount');
  if (amountInput) amountInput.focus();
}

function calculateClosingStock(item) {
  const op = Number(item.op_stock) || 0;
  const f = Number(item.receipt) || 0;
  const g = Number(item.issues) || 0;
  const h = Number(item.return) || 0;
  const i = Number(item.ssl_i) || 0;
  const j = Number(item.ssl_j) || 0;
  const l = Number(item.rejection_l) || 0;

  return (op + f + h + i) - (g + j + l);
}

function updateCountingModeBadge() {
  const sectionSelect = document.getElementById('sectionSelect');
  const badge = document.getElementById('countingModeBadge');
  const packCalcContainer = document.getElementById('packCalcContainer');
  const btnExcel = document.getElementById('btnExcel');
  const btnShare = document.getElementById('btnShare');
  const btnCountingDownload = document.getElementById('btnCountingDownload');
  const btnBinCardView = document.getElementById('btnBinCardView');
  
  if (!sectionSelect || !badge) return;
  
  if (sectionSelect.value === 'COUNTING') {
    badge.innerText = 'Normal Counting';
    badge.className = 'counting-mode-badge badge-normal';
    if (packCalcContainer) packCalcContainer.style.display = 'flex';
    
    if (btnExcel) btnExcel.style.display = 'none';
    if (btnShare) btnShare.style.display = 'none';
    if (btnCountingDownload) btnCountingDownload.style.display = 'flex';
    if (btnBinCardView) btnBinCardView.style.display = 'none';
  } else {
    badge.innerText = 'Daily Stocks';
    badge.className = 'counting-mode-badge badge-daily';
    if (packCalcContainer) packCalcContainer.style.display = 'none';

    if (btnExcel) btnExcel.style.display = 'flex';
    if (btnShare) btnShare.style.display = 'flex';
    if (btnCountingDownload) btnCountingDownload.style.display = 'none';
    if (btnBinCardView) btnBinCardView.style.display = 'block';
  }
}

function addSingleSectionData() {
  if (selectedIndex < 0 || selectedIndex >= inventory.length) {
    showToast(i18n[currentLang].msgSelectMaterial, 'error');
    return;
  }

  const amountInput = document.getElementById('inputAmount');
  const val = parseFloat(amountInput.value);
  if (isNaN(val) || val < 0) {
    showToast(i18n[currentLang].msgValidAmount, 'error');
    return;
  }

  const packsInput = document.getElementById('inputPacksCount');
  const packsVal = parseFloat(packsInput ? packsInput.value : 0) || 0;

  const section = document.getElementById('sectionSelect').value;
  const item = inventory[selectedIndex];

  if (section === 'F') item.receipt = (Number(item.receipt) || 0) + val;
  else if (section === 'G') item.issues = (Number(item.issues) || 0) + val;
  else if (section === 'H') item.return = (Number(item.return) || 0) + val;
  else if (section === 'I') item.ssl_i = (Number(item.ssl_i) || 0) + val;
  else if (section === 'J') item.ssl_j = (Number(item.ssl_j) || 0) + val;
  else if (section === 'L') item.rejection_l = (Number(item.rejection_l) || 0) + val;
  else if (section === 'COUNTING') {
    item.counting = val;
    item.packs_count = packsVal;
  }

  saveInventoryData();

  amountInput.value = '';
  if (packsInput) packsInput.value = '';

  document.getElementById('dispClosing').innerText = calculateClosingStock(item);

  showToast(`${item.name} ${i18n[currentLang].msgAdded}`, 'success');
}

// ==================== BIN CARD UPDATE VIEW ====================
function openBinCardUpdateView() {
  const modal = document.getElementById('binCardUpdateModal');
  if (modal) {
    modal.classList.add('show');
    renderBinCardUpdateViewList();
  }
}

function closeBinCardUpdateView() {
  const modal = document.getElementById('binCardUpdateModal');
  if (modal) modal.classList.remove('show');
}

function renderBinCardUpdateViewList() {
  const container = document.getElementById('binCardCardsContainer');
  const searchInput = document.getElementById('binCardSearchInput');
  if (!container) return;

  const filter = searchInput ? searchInput.value.toLowerCase().trim() : '';

  const filtered = inventory.filter(item => {
    const hasActivity = (Number(item.receipt) > 0 || Number(item.issues) > 0 || Number(item.return) > 0 || Number(item.rejection_l) > 0);
    if (!hasActivity) return false;

    if (!filter) return true;
    return item.code.toLowerCase().includes(filter) || item.name.toLowerCase().includes(filter);
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 40px 20px; color: var(--text-muted);">
        <i class="fa-solid fa-clipboard-question" style="font-size: 2.5rem; margin-bottom: 12px; color: var(--border-color);"></i>
        <p style="font-weight: 600;">අදාළ F, G, H, K/L දත්තයන් පවතින දත්ත කිසිවක් හමු නොවීය.</p>
      </div>
    `;
    return;
  }

  let html = '';
  filtered.forEach(item => {
    html += `
      <div class="bincard-card">
        <div class="bincard-header">
          <div class="bincard-title">${item.name}</div>
          <div class="bincard-code">${item.code}</div>
        </div>
        <div class="bincard-grid">
          <div class="bincard-section-box">
            <span class="bincard-section-title">Receipt (F)</span>
            <span class="bincard-section-val" style="color:var(--success);">${item.receipt || 0}</span>
          </div>
          <div class="bincard-section-box">
            <span class="bincard-section-title">Issues (G)</span>
            <span class="bincard-section-val" style="color:var(--danger);">${item.issues || 0}</span>
          </div>
          <div class="bincard-section-box">
            <span class="bincard-section-title">Return (H)</span>
            <span class="bincard-section-val" style="color:var(--warning);">${item.return || 0}</span>
          </div>
          <div class="bincard-section-box">
            <span class="bincard-section-title">Rejection (K/L)</span>
            <span class="bincard-section-val" style="color:var(--danger);">${item.rejection_l || 0}</span>
          </div>
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
}

function downloadBinCardViewData() {
  const filtered = inventory.filter(item => 
    (Number(item.receipt) > 0 || Number(item.issues) > 0 || Number(item.return) > 0 || Number(item.rejection_l) > 0)
  );

  if (filtered.length === 0) {
    showToast("Download කිරීමට දත්ත නොමැත!", "error");
    return;
  }

  const exportData = filtered.map(item => ({
    "Material Code": item.code,
    "Material Name": item.name,
    "Receipt (F)": item.receipt || 0,
    "Issues (G)": item.issues || 0,
    "Return (H)": item.return || 0,
    "Rejection (K/L)": item.rejection_l || 0
  }));

  const ws = XLSX.utils.json_to_sheet(exportData);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "Bin Card Update View");
  
  const dateStr = new Date().toISOString().slice(0, 10);
  XLSX.writeFile(wb, `Bin_Card_Update_View_${dateStr}.xlsx`);
  showToast("Bin Card View දත්ත සාර්ථකව Download විය!", "success");
}

// ==================== RESTORE EXCEL DATA FIX ====================
function restoreFromXLSX() {
  const fileInput = document.getElementById('xlsxFileInput');
  if (!fileInput || fileInput.files.length === 0) {
    showToast(i18n[currentLang].msgRestoreSelect, 'error');
    return;
  }

  const file = fileInput.files[0];
  showLoading("Restoring Full Excel Data...");

  const reader = new FileReader();
  reader.onload = function(e) {
    try {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: 'array' });
      const firstSheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[firstSheetName];
      const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

      if (jsonData.length < 2) {
        hideLoading();
        showToast("Excel ගොනුවේ දත්ත ප්‍රමාණවත් නොවේ!", "error");
        return;
      }

      const rawHeaders = jsonData[0];
      const headers = rawHeaders.map(h => String(h || '').toLowerCase().trim());
      
      let codeIdx = headers.findIndex(h => h.includes('code'));
      let nameIdx = headers.findIndex(h => h.includes('name') || h.includes('description'));
      let uomIdx = headers.findIndex(h => h.includes('uom') || h.includes('unit'));
      let opIdx = headers.findIndex(h => h.includes('op') || h.includes('opening'));
      let receiptIdx = headers.findIndex(h => h.includes('receipt') || h === 'f');
      let issuesIdx = headers.findIndex(h => h.includes('issues') || h === 'g');
      let returnIdx = headers.findIndex(h => h.includes('return') || h === 'h');
      let rejectionIdx = headers.findIndex(h => h.includes('rejection') || h === 'k' || h === 'l');

      if (codeIdx === -1) codeIdx = 0;
      if (nameIdx === -1) nameIdx = 1;

      let restoredCount = 0;
      for (let i = 1; i < jsonData.length; i++) {
        const row = jsonData[i];
        if (!row || row.length === 0 || !row[codeIdx]) continue;

        const code = String(row[codeIdx]).trim();
        const name = nameIdx !== -1 && row[nameIdx] ? String(row[nameIdx]).trim() : 'Unknown Material';
        const uom = uomIdx !== -1 && row[uomIdx] ? String(row[uomIdx]).trim() : 'KG';
        const opStock = opIdx !== -1 && !isNaN(row[opIdx]) ? Number(row[opIdx]) : 0;

        let rowObject = {};
        rawHeaders.forEach((h, colIdx) => {
          if (h) rowObject[String(h)] = row[colIdx] !== undefined ? row[colIdx] : "";
        });

        let existing = inventory.find(item => item.code === code);
        if (existing) {
          existing.name = name;
          existing.uom = uom;
          existing.op_stock = opStock;
          if (receiptIdx !== -1 && !isNaN(row[receiptIdx])) existing.receipt = Number(row[receiptIdx]);
          if (issuesIdx !== -1 && !isNaN(row[issuesIdx])) existing.issues = Number(row[issuesIdx]);
          if (returnIdx !== -1 && !isNaN(row[returnIdx])) existing.return = Number(row[returnIdx]);
          if (rejectionIdx !== -1 && !isNaN(row[rejectionIdx])) existing.rejection_l = Number(row[rejectionIdx]);
          existing.rawData = rowObject;
        } else {
          inventory.push({
            type: "RM",
            code: code,
            name: name,
            uom: uom,
            op_stock: opStock,
            receipt: receiptIdx !== -1 && !isNaN(row[receiptIdx]) ? Number(row[receiptIdx]) : 0,
            issues: issuesIdx !== -1 && !isNaN(row[issuesIdx]) ? Number(row[issuesIdx]) : 0,
            return: returnIdx !== -1 && !isNaN(row[returnIdx]) ? Number(row[returnIdx]) : 0,
            ssl_i: 0,
            ssl_j: 0,
            rejection_l: rejectionIdx !== -1 && !isNaN(row[rejectionIdx]) ? Number(row[rejectionIdx]) : 0,
            counting: 0,
            packs_count: 0,
            weight_kg: 0,
            pieces_count: 0,
            rawData: rowObject
          });
        }
        restoredCount++;
      }

      saveInventoryData();
      hideLoading();
      showToast(`${i18n[currentLang].msgRestoreSuccess} (${restoredCount} items updated)`, 'success');
      fileInput.value = '';
      closeSettings();
      openBinCardUpdateView();
    } catch (err) {
      console.error(err);
      hideLoading();
      showToast("Excel ගොනුව කියවීමේ දෝෂයක් ඇතිවිය!", "error");
    }
  };
  reader.readAsArrayBuffer(file);
}

// ==================== UPDATED LIVE & EDIT POPUP WITH RIGHT SWIPE ====================
function openTodayUploadedModal() {
  const modal = document.getElementById('todayUploadedModal');
  if (modal) {
    modal.classList.add('show');
    renderTodayUploadedList();
  }
}

function closeTodayUploadedModal() {
  const modal = document.getElementById('todayUploadedModal');
  if (modal) modal.classList.remove('show');
}

function renderTodayUploadedList() {
  const container = document.getElementById('todayCardsContainer');
  const searchInput = document.getElementById('todayModalSearchInput');
  const toggleCountingOnly = document.getElementById('toggleCountingOnly');
  if (!container) return;

  const filter = searchInput ? searchInput.value.toLowerCase().trim() : '';
  const countingOnly = toggleCountingOnly ? toggleCountingOnly.checked : false;

  const filtered = inventory.filter(item => {
    if (countingOnly && Number(item.counting) <= 0) return false;
    if (!filter) return true;
    return item.code.toLowerCase().includes(filter) || item.name.toLowerCase().includes(filter);
  });

  if (filtered.length === 0) {
    container.innerHTML = `<div style="text-align:center; padding:30px; color:var(--text-muted);">දත්ත කිසිවක් හමු නොවීය.</div>`;
    return;
  }

  let html = '';
  filtered.forEach(item => {
    const originalIndex = inventory.findIndex(i => i.code === item.code);
    const closing = calculateClosingStock(item);
    
    let subDetailsHtml = '';
    if (countingOnly) {
      subDetailsHtml = `
        <div style="font-size:0.75rem; color:var(--text-muted);">
          Amount: <strong>${item.counting || 0}</strong> | KG: <strong>${item.weight_kg || 0}</strong> | Pieces: <strong>${item.pieces_count || 0}</strong>
        </div>
      `;
    } else {
      subDetailsHtml = `
        <div style="font-size:0.75rem; color:var(--primary); font-weight:700;">
          Closing Stock: ${closing} ${item.uom}
        </div>
      `;
    }

    html += `
      <div class="checklist-item" id="item-card-${originalIndex}" data-index="${originalIndex}">
        <div class="checklist-left">
          <div class="checklist-info">
            <span class="checklist-name">${item.name}</span>
            <span class="checklist-code">Code: ${item.code} | UOM: ${item.uom}</span>
          </div>
        </div>
        <div class="checklist-right">
          ${subDetailsHtml}
        </div>
      </div>
    `;
  });
  container.innerHTML = html;
  setupTouchSwipeEvents();
}

function setupTouchSwipeEvents() {
  const cards = document.querySelectorAll('.checklist-item');
  cards.forEach(card => {
    let startX = 0;
    let currentX = 0;
    const index = card.getAttribute('data-index');

    card.addEventListener('touchstart', (e) => {
      startX = e.touches[0].clientX;
    }, {passive: true});

    card.addEventListener('touchmove', (e) => {
      currentX = e.touches[0].clientX;
      let diff = currentX - startX;
      if (diff > 0 && diff < 100) {
        card.style.transform = `translateX(${diff}px)`;
      }
    }, {passive: true});

    card.addEventListener('touchend', (e) => {
      let diff = currentX - startX;
      if (diff > 50) {
        openEditCountingModal(index);
      }
      card.style.transform = 'translateX(0px)';
      startX = 0;
      currentX = 0;
    });

    card.addEventListener('click', () => {
      openEditCountingModal(index);
    });
  });
}

function openEditCountingModal(index) {
  currentlyEditingIndex = index;
  const item = inventory[index];
  document.getElementById('editModalItemName').innerText = item.name;
  document.getElementById('editModalItemCode').innerText = `Code: ${item.code} | UOM: ${item.uom}`;
  document.getElementById('editCountingAmountInput').value = item.counting || '';
  document.getElementById('editWeightKgInput').value = item.weight_kg || '';
  document.getElementById('editPiecesCountInput').value = item.pieces_count || '';
  
  const modal = document.getElementById('editCountingModal');
  if (modal) modal.classList.add('show');
}

function closeEditCountingModal() {
  const modal = document.getElementById('editCountingModal');
  if (modal) modal.classList.remove('show');
}

function saveEditedCountingAmount() {
  if (currentlyEditingIndex < 0 || currentlyEditingIndex >= inventory.length) return;
  const amt = parseFloat(document.getElementById('editCountingAmountInput').value) || 0;
  const kg = parseFloat(document.getElementById('editWeightKgInput').value) || 0;
  const pcs = parseFloat(document.getElementById('editPiecesCountInput').value) || 0;

  inventory[currentlyEditingIndex].counting = amt;
  inventory[currentlyEditingIndex].weight_kg = kg;
  inventory[currentlyEditingIndex].pieces_count = pcs;
  
  saveInventoryData();

  closeEditCountingModal();
  renderTodayUploadedList();
  showToast("දත්ත සාර්ථකව යාවත්කාලීන විය!", "success");
}

// ==================== OTHER SUPPORTING FUNCTIONS ====================
function showToast(message, type = 'success') {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  
  let icon = 'fa-circle-check';
  if (type === 'error') icon = 'fa-triangle-exclamation';
  if (type === 'warning') icon = 'fa-circle-exclamation';

  toast.innerHTML = `<i class="fa-solid ${icon}" style="font-size:1.2rem;"></i> <span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'scale(0.8) translateY(20px)';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

function showLoading(text = "Processing...") {
  const overlay = document.getElementById('loadingOverlay');
  const txt = document.getElementById('loadingText');
  if (txt) txt.innerText = text;
  if (overlay) overlay.style.display = 'flex';
}

function hideLoading() {
  const overlay = document.getElementById('loadingOverlay');
  if (overlay) overlay.style.display = 'none';
}

function openSettings() {
  const modal = document.getElementById('settingsModal');
  if (modal) modal.classList.add('show');
}

function closeSettings() {
  const modal = document.getElementById('settingsModal');
  if (modal) modal.classList.remove('show');
}

function changeTheme(theme) {
  currentTheme = theme;
  localStorage.setItem('rmc_app_theme', theme);
  applyTheme(theme);
}

function applyTheme(theme) {
  if (theme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
  } else if (theme === 'blue') {
    document.documentElement.setAttribute('data-theme', 'blue');
  } else {
    document.documentElement.removeAttribute('data-theme');
  }
  const select = document.getElementById('themeSelect');
  if (select) select.value = theme;
}

function changeLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('rmc_app_lang', lang);
  applyLanguage(lang);
}

function applyLanguage(lang) {
  const dict = i18n[lang];
  if (!dict) return;

  setElHTML('lblSearch', dict.lblSearch);
  setElPlaceholder('searchInput', dict.placeholderSearch);
  setElHTML('lblSection', dict.lblSection);
  setElHTML('optReceipt', dict.optReceipt);
  setElHTML('optIssues', dict.optIssues);
  setElHTML('optReturn', dict.optReturn);
  setElHTML('optSslI', dict.optSslI);
  setElHTML('optSslJ', dict.optSslJ);
  setElHTML('optRejectionL', dict.optRejectionL);
  setElHTML('optCounting', dict.optCounting);
  setElHTML('lblAmount', dict.lblAmount);
  setElHTML('btnSave', dict.btnSave);
  setElHTML('txtSettingsTitle', dict.txtSettingsTitle);
  setElHTML('lblLanguage', dict.lblLanguage);
  setElHTML('lblTheme', dict.lblTheme);
  setElHTML('lblRestore', dict.lblRestore);
  setElHTML('descRestore', dict.descRestore);
  setElHTML('btnRestore', dict.btnRestore);
  setElHTML('lblBackup', dict.lblBackup);
  setElHTML('descBackup', dict.descBackup);
  setElHTML('btnBackup', dict.btnBackup);
  setElHTML('lblReset', dict.lblReset);
  setElHTML('descReset', dict.descReset);
  setElHTML('btnReset', dict.btnReset);
  setElHTML('lblFooter', dict.lblFooter);

  const langSelect = document.getElementById('langSelect');
  if (langSelect) langSelect.value = lang;
}

function setElHTML(id, html) {
  const el = document.getElementById(id);
  if (el) el.innerHTML = html;
}

function setElPlaceholder(id, text) {
  const el = document.getElementById(id);
  if (el) el.placeholder = text;
}

function resetToDefault() {
  if (confirm(i18n[currentLang].msgResetConfirm)) {
    inventory = JSON.parse(JSON.stringify(defaultItems));
    saveInventoryData();
    showToast("දත්ත මුල් තත්වයට පත් කරන ලදී!", "success");
    closeSettings();
    clearSearchInput();
  }
}

function downloadXLSXBackup() {
  const dataToExport = inventory.map(item => ({
    "Material Code": item.code,
    "Material Name": item.name,
    "UOM": item.uom,
    "Opening Stock": item.op_stock,
    "Receipt (F)": item.receipt,
    "Issues (G)": item.issues,
    "Return (H)": item.return,
    "Received to SSL (I)": item.ssl_i,
    "Sent to SSL (J)": item.ssl_j,
    "Rejection (L)": item.rejection_l,
    "Counting": item.counting,
    "Packs Count": item.packs_count,
    "Closing Stock": calculateClosingStock(item)
  }));

  const worksheet = XLSX.utils.json_to_sheet(dataToExport);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Inventory_Backup");
  
  const dateStr = new Date().toISOString().slice(0, 10);
  XLSX.writeFile(workbook, `RMC_Stock_Backup_${dateStr}.xlsx`);
  showToast("Backup ගොනුව සාර්ථකව Download විය!", "success");
}

function openCountingDownloadModal() {
  const modal = document.getElementById('countingDownloadModal');
  if (modal) modal.classList.add('show');
  updateCountingFileName();
}

function closeCountingDownloadModal() {
  const modal = document.getElementById('countingDownloadModal');
  if (modal) modal.classList.remove('show');
}

function updateCountingFileName() {
  const input = document.getElementById('countingFileNameInput');
  const dateStr = new Date().toISOString().slice(0, 10);
  if (input) input.placeholder = `Counting_Sheet_${dateStr}`;
}

function processCountingDownload() {
  const format = document.getElementById('countingFormatSelect').value;
  const inputName = document.getElementById('countingFileNameInput').value.trim();
  const dateStr = new Date().toISOString().slice(0, 10);
  const fileName = inputName || `Counting_Sheet_${dateStr}`;

  if (format === 'xlsx') {
    const exportData = inventory.map(item => ({
      "Code": item.code,
      "Name": item.name,
      "UOM": item.uom,
      "Counting Amount": item.counting,
      "Packs Count": item.packs_count,
      "Weight (KG)": item.weight_kg,
      "Pieces Count": item.pieces_count
    }));
    const ws = XLSX.utils.json_to_sheet(exportData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Counting Sheet");
    XLSX.writeFile(wb, `${fileName}.xlsx`);
    showToast("Counting Sheet Excel ගොනුව බාගත විය!", "success");
  } else if (format === 'pdf') {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    doc.text("Counting Sheet Report - " + dateStr, 14, 15);
    
    const tableData = inventory.map(item => [item.code, item.name, item.uom, item.counting, item.weight_kg, item.pieces_count]);
    doc.autoTable({
      head: [['Code', 'Material Name', 'UOM', 'Counting', 'Weight (KG)', 'Pieces']],
      body: tableData,
      startY: 20
    });
    doc.save(`${fileName}.pdf`);
    showToast("Counting Sheet PDF ගොනුව බාගත විය!", "success");
  } else {
    let text = `Counting Sheet Report - ${dateStr}\n\n`;
    inventory.forEach(i => {
      text += `Code: ${i.code} | Name: ${i.name} | UOM: ${i.uom} | Counting: ${i.counting} | KG: ${i.weight_kg} | Pieces: ${i.pieces_count}\n`;
    });
    const blob = new Blob([text], { type: 'application/msword' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${fileName}.doc`;
    a.click();
    showToast("Counting Sheet Word ගොනුව බාගත විය!", "success");
  }
  closeCountingDownloadModal();
}

function processCountingShare() {
  processCountingDownload();
  showToast(i18n[currentLang].msgAdded, 'success');
}

function openExportModal(mode) {
  currentExportMode = mode;
  const modal = document.getElementById('exportModal');
  const title = document.getElementById('txtExportTitle');
  const btn = document.getElementById('btnConfirmExport');
  
  if (title) title.innerHTML = `<i class="fa-solid fa-file-export" style="color:var(--primary);"></i> ${mode === 'excel' ? i18n[currentLang].titleExcel : i18n[currentLang].titleShare}`;
  if (btn) btn.innerHTML = `<i class="fa-solid ${mode === 'excel' ? 'fa-download' : 'fa-share-nodes'}"></i> ${mode === 'excel' ? 'Download Excel' : 'Share File'}`;
  
  updateDefaultFileName();
  if (modal) modal.classList.add('show');
}

function closeExportModal() {
  const modal = document.getElementById('exportModal');
  if (modal) modal.classList.remove('show');
}

function updateDefaultFileName() {
  const input = document.getElementById('exportFileNameInput');
  const dateStr = new Date().toISOString().slice(0, 10);
  if (input) input.placeholder = `Stock_Counting_${dateStr}`;
}

function processExportAction() {
  const format = document.getElementById('exportFormatSelect').value;
  const inputName = document.getElementById('exportFileNameInput').value.trim();
  const dateStr = new Date().toISOString().slice(0, 10);
  const fileName = inputName || `Stock_Counting_${dateStr}`;
  const shiftStock = document.getElementById('chkShiftStock').checked;

  const exportData = inventory.map(item => ({
    "Material Code": item.code,
    "Material Name": item.name,
    "UOM": item.uom,
    "Opening Stock": item.op_stock,
    "Receipt (F)": item.receipt,
    "Issues (G)": item.issues,
    "Return (H)": item.return,
    "Received to SSL (I)": item.ssl_i,
    "Sent to SSL (J)": item.ssl_j,
    "Rejection (L)": item.rejection_l,
    "Counting": item.counting,
    "Packs Count": item.packs_count,
    "Closing Stock": calculateClosingStock(item)
  }));

  if (format === 'xlsx') {
    const ws = XLSX.utils.json_to_sheet(exportData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Daily Stock");
    XLSX.writeFile(wb, `${fileName}.xlsx`);
  } else if (format === 'csv') {
    const ws = XLSX.utils.json_to_sheet(exportData);
    const csv = XLSX.utils.sheet_to_csv(ws);
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${fileName}.csv`;
    a.click();
  } else {
    let txt = `Daily Stock Summary - ${dateStr}\n\n`;
    exportData.forEach(i => {
      txt += `${i["Material Code"]} | ${i["Material Name"]} | Closing: ${i["Closing Stock"]} ${i["UOM"]}\n`;
    });
    const blob = new Blob([txt], { type: 'text/plain;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${fileName}.txt`;
    a.click();
  }

  if (shiftStock) {
    inventory.forEach(item => {
      item.op_stock = calculateClosingStock(item);
      item.receipt = 0;
      item.issues = 0;
      item.return = 0;
      item.ssl_i = 0;
      item.ssl_j = 0;
      item.rejection_l = 0;
      item.counting = 0;
      item.packs_count = 0;
      item.weight_kg = 0;
      item.pieces_count = 0;
    });
    saveInventoryData();
  }

  closeExportModal();
  showToast(i18n[currentLang].msgExcelShift, 'success');
}
