const i18n = {
  si: {
    lblSearch: '<i class="fa-solid fa-magnifying-glass"></i> Search by Name or Code:',
    placeholderSearch: 'සොයන්න Code හෝ Name ඇතුලත් කරන්න...',
    lblSection: '<i class="fa-solid fa-layer-group"></i> Select Section:',
    optReceipt: 'Receipt (F)',
    optIssues: 'Issues (G)',
    optReturn: 'Return (H)',
    optSectionK: 'Section K',
    optSslI: 'Received to SSL',
    optSslJ: 'Sent to SSL',
    optRejectionL: 'Rejection',
    optCounting: 'Counting',
    lblAmount: '<i class="fa-solid fa-calculator"></i> ප්‍රමාණය ඇතුළත් කරන්න:',
    btnSave: '<i class="fa-solid fa-floppy-disk"></i> Save',
    titleExcel: 'Download File & Shift Stock',
    titleShare: 'Share Data File',
    txtSettingsTitle: '<i class="fa-solid fa-sliders" style="color:var(--primary);"></i> සැකසුම් (Settings)',
    lblLanguage: '<i class="fa-solid fa-language" style="color:var(--primary);"></i> භාෂාව තෝරන්න (Language):',
    lblTheme: '<i class="fa-solid fa-palette" style="color:var(--warning);"></i> Theme එක තෝරන්න:',
    lblRestore: '<i class="fa-solid fa-file-import" style="color:var(--success);"></i> Excel (.xlsx) Restore කරන්න:',
    descRestore: 'පෙර Save කරන ලද Full Excel File එකක් මගින් දත්ත යාවත්කාලීන කරගන්න.',
    btnRestore: '<i class="fa-solid fa-upload"></i> Restore Full Excel Data',
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
    msgRestoreSelect: 'කරුණාකර Excel File එකක් තෝරන්න!',
    msgRestoreSuccess: 'Excel Restore සාර්ථකයි!',
    msgResetConfirm: 'ඔබට නැවත මුල් දත්ත ලබා ගැනීමට අවශ්‍ය බව විශ්වාසද?'
  },
  en: {
    lblSearch: '<i class="fa-solid fa-magnifying-glass"></i> Search by Name or Code:',
    placeholderSearch: 'Type Code or Name to filter...',
    lblSection: '<i class="fa-solid fa-layer-group"></i> Select Section:',
    optReceipt: 'Receipt (F)',
    optIssues: 'Issues (G)',
    optReturn: 'Return (H)',
    optSectionK: 'Section K',
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
    btnRestore: '<i class="fa-solid fa-upload"></i> Restore Full Excel Data',
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
  {type: "RM", code: "11067431", name: "SALT - FLOW", uom: "KG", op_stock: 11000, receipt: 0, issues: 0, return: 0, section_k: 0, ssl_i: 0, ssl_j: 0, rejection_l: 0, counting: 0, packs_count: 0, kg_weight: 0, pieces_count: 0}, 
  {type: "RM", code: "11061702", name: "WHITE SUGAR", uom: "KG", op_stock: 2500, receipt: 0, issues: 0, return: 0, section_k: 0, ssl_i: 0, ssl_j: 0, rejection_l: 0, counting: 0, packs_count: 0, kg_weight: 0, pieces_count: 0}, 
  {type: "RM", code: "11002301", name: "MONOSODIUM GLUTAMATE", uom: "KG", op_stock: 4525, receipt: 0, issues: 0, return: 0, section_k: 0, ssl_i: 0, ssl_j: 0, rejection_l: 0, counting: 0, packs_count: 0, kg_weight: 0, pieces_count: 0}, 
  {type: "RM", code: "67548375", name: "ONION POWDER", uom: "KG", op_stock: 120, receipt: 0, issues: 0, return: 0, section_k: 0, ssl_i: 0, ssl_j: 0, rejection_l: 0, counting: 0, packs_count: 0, kg_weight: 0, pieces_count: 0}, 
  {type: "RM", code: "11067473", name: "CITRIC ACID MONOHYDRATE (FOOD GRADE)", uom: "KG", op_stock: 50, receipt: 0, issues: 0, return: 0, section_k: 0, ssl_i: 0, ssl_j: 0, rejection_l: 0, counting: 0, packs_count: 0, kg_weight: 0, pieces_count: 0}
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
        section_k: item.section_k || 0,
        ssl_i: item.ssl_i || 0,
        ssl_j: item.ssl_j || 0,
        rejection_l: item.rejection_l || 0,
        counting: item.counting || 0,
        packs_count: item.packs_count || 0,
        kg_weight: item.kg_weight || 0,
        pieces_count: item.pieces_count || 0
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
    const searchContainer = document.querySelector('.search-input-container');
    const resultsBox = document.getElementById('searchResults');
    if (resultsBox && searchContainer && !searchContainer.contains(e.target)) {
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
  const k = Number(item.section_k) || 0;
  const i = Number(item.ssl_i) || 0;
  const j = Number(item.ssl_j) || 0;
  const l = Number(item.rejection_l) || 0;

  return (op + f + h + i) - (g + k + j + l);
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
    if (btnBinCardView) btnBinCardView.style.display = 'none'; // Hidden in Counting mode
  } else {
    badge.innerText = 'Daily Stocks';
    badge.className = 'counting-mode-badge badge-daily';
    if (packCalcContainer) packCalcContainer.style.display = 'none';

    if (btnExcel) btnExcel.style.display = 'flex';
    if (btnShare) btnShare.style.display = 'flex';
    if (btnCountingDownload) btnCountingDownload.style.display = 'none';
    if (btnBinCardView) btnBinCardView.style.display = 'flex'; // Shown ONLY in Daily Stock mode
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

  const section = document.getElementById('sectionSelect').value;
  const item = inventory[selectedIndex];

  if (section === 'F') item.receipt = (Number(item.receipt) || 0) + val;
  else if (section === 'G') item.issues = (Number(item.issues) || 0) + val;
  else if (section === 'H') item.return = (Number(item.return) || 0) + val;
  else if (section === 'K') item.section_k = (Number(item.section_k) || 0) + val;
  else if (section === 'I') item.ssl_i = (Number(item.ssl_i) || 0) + val;
  else if (section === 'J') item.ssl_j = (Number(item.ssl_j) || 0) + val;
  else if (section === 'L') item.rejection_l = (Number(item.rejection_l) || 0) + val;
  else if (section === 'COUNTING') {
    item.counting = val;
    const packsInput = document.getElementById('inputPacksCount');
    if (packsInput) item.packs_count = parseFloat(packsInput.value) || 0;
  }

  saveInventoryData();

  amountInput.value = '';
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

function getBinCardFilteredItems() {
  const searchInput = document.getElementById('binCardSearchInput');
  const filter = searchInput ? searchInput.value.toLowerCase().trim() : '';

  return inventory.filter(item => {
    // Only show items with non-zero activity in sections F, G, H, or K
    const hasBinCardData = (Number(item.receipt) > 0 || Number(item.issues) > 0 || 
                            Number(item.return) > 0 || Number(item.section_k) > 0);
    
    if (!hasBinCardData) return false;
    if (!filter) return true;

    return item.code.toLowerCase().includes(filter) || item.name.toLowerCase().includes(filter);
  });
}

function renderBinCardUpdateViewList() {
  const container = document.getElementById('binCardCardsContainer');
  if (!container) return;

  const filtered = getBinCardFilteredItems();

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; grid-column: 1/-1; padding: 40px 20px; color: var(--text-muted);">
        <i class="fa-solid fa-clipboard-question" style="font-size: 2.5rem; margin-bottom: 12px; color: var(--border-color);"></i>
        <p style="font-weight: 600;">අදාළ දත්ත කිසිවක් හමු නොවීය.</p>
        <p style="font-size: 0.85rem; margin-top: 4px;">F, G, H, K සෙක්ෂන් සඳහා දත්ත ඇතුළත් කිරීමෙන් පසු මෙහි බලාගත හැක.</p>
      </div>
    `;
    return;
  }

  let html = '';
  filtered.forEach(item => {
    html += `
      <div class="bincard-card">
        <div class="bincard-header">
          <div>
            <span class="bincard-code">${item.code}</span>
            <div class="bincard-name">${item.name}</div>
          </div>
        </div>
        
        <div class="bincard-sections-grid">
          <div class="bincard-sec-box sec-f">
            <span>Receipt (F)</span>
            <span style="font-size: 1rem; font-weight: 800;">${item.receipt || 0}</span>
          </div>
          <div class="bincard-sec-box sec-g">
            <span>Issues (G)</span>
            <span style="font-size: 1rem; font-weight: 800;">${item.issues || 0}</span>
          </div>
          <div class="bincard-sec-box sec-h">
            <span>Return (H)</span>
            <span style="font-size: 1rem; font-weight: 800;">${item.return || 0}</span>
          </div>
          <div class="bincard-sec-box sec-k">
            <span>Section (K)</span>
            <span style="font-size: 1rem; font-weight: 800;">${item.section_k || 0}</span>
          </div>
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
}

function downloadBinCardView() {
  const filtered = getBinCardFilteredItems();
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
    "Section (K)": item.section_k || 0
  }));

  const ws = XLSX.utils.json_to_sheet(exportData);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "Bin Card Details");
  const dateStr = new Date().toISOString().slice(0, 10);
  XLSX.writeFile(wb, `Bin_Card_Update_View_${dateStr}.xlsx`);
  showToast("Bin Card දත්ත Excel ගොනුව බාගත විය!", "success");
}

// ==================== RESTORE FULL EXCEL DATA ====================
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

      const headers = jsonData[0].map(h => String(h || '').toLowerCase().trim());
      
      let codeIdx = headers.findIndex(h => h.includes('code'));
      let nameIdx = headers.findIndex(h => h.includes('name') || h.includes('description'));
      let uomIdx = headers.findIndex(h => h.includes('uom') || h.includes('unit'));
      let opIdx = headers.findIndex(h => h.includes('op') || h.includes('opening'));
      let receiptIdx = headers.findIndex(h => h.includes('receipt') || h.includes('f'));
      let issuesIdx = headers.findIndex(h => h.includes('issues') || h.includes('g'));
      let returnIdx = headers.findIndex(h => h.includes('return') || h.includes('h'));
      let sectionKIdx = headers.findIndex(h => h.includes('section k') || h.includes('k'));
      let countingIdx = headers.findIndex(h => h.includes('counting'));
      let kgIdx = headers.findIndex(h => h.includes('kg') || h.includes('weight'));
      let piecesIdx = headers.findIndex(h => h.includes('pieces') || h.includes('කැබලි'));

      if (codeIdx === -1) codeIdx = 0;
      if (nameIdx === -1) nameIdx = 1;
      if (uomIdx === -1) uomIdx = 2;
      if (opIdx === -1) opIdx = 3;

      let restoredCount = 0;
      for (let i = 1; i < jsonData.length; i++) {
        const row = jsonData[i];
        if (!row || !row[codeIdx]) continue;

        const code = String(row[codeIdx]).trim();
        const name = nameIdx !== -1 && row[nameIdx] ? String(row[nameIdx]).trim() : 'Material';
        const uom = uomIdx !== -1 && row[uomIdx] ? String(row[uomIdx]).trim() : 'KG';
        const opStock = opIdx !== -1 && !isNaN(row[opIdx]) ? Number(row[opIdx]) : 0;

        let existing = inventory.find(item => item.code === code);
        if (existing) {
          existing.name = name;
          existing.uom = uom;
          existing.op_stock = opStock;
          if (receiptIdx !== -1 && !isNaN(row[receiptIdx])) existing.receipt = Number(row[receiptIdx]);
          if (issuesIdx !== -1 && !isNaN(row[issuesIdx])) existing.issues = Number(row[issuesIdx]);
          if (returnIdx !== -1 && !isNaN(row[returnIdx])) existing.return = Number(row[returnIdx]);
          if (sectionKIdx !== -1 && !isNaN(row[sectionKIdx])) existing.section_k = Number(row[sectionKIdx]);
          if (countingIdx !== -1 && !isNaN(row[countingIdx])) existing.counting = Number(row[countingIdx]);
          if (kgIdx !== -1 && !isNaN(row[kgIdx])) existing.kg_weight = Number(row[kgIdx]);
          if (piecesIdx !== -1 && !isNaN(row[piecesIdx])) existing.pieces_count = Number(row[piecesIdx]);
          existing.full_raw_row = row; // Keep complete row details
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
            section_k: sectionKIdx !== -1 && !isNaN(row[sectionKIdx]) ? Number(row[sectionKIdx]) : 0,
            ssl_i: 0, ssl_j: 0, rejection_l: 0,
            counting: countingIdx !== -1 && !isNaN(row[countingIdx]) ? Number(row[countingIdx]) : 0,
            packs_count: 0,
            kg_weight: kgIdx !== -1 && !isNaN(row[kgIdx]) ? Number(row[kgIdx]) : 0,
            pieces_count: piecesIdx !== -1 && !isNaN(row[piecesIdx]) ? Number(row[piecesIdx]) : 0,
            full_raw_row: row
          });
        }
        restoredCount++;
      }

      saveInventoryData();
      hideLoading();
      showToast(`${i18n[currentLang].msgRestoreSuccess} (${restoredCount} Items)`, 'success');
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

// ==================== UPDATED LIVE & SWIPE TO EDIT ====================
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

  let filtered = [];

  if (countingOnly) {
    // Show Counting Details Only
    filtered = inventory.filter(item => {
      const matchSearch = !filter || item.code.toLowerCase().includes(filter) || item.name.toLowerCase().includes(filter);
      return (Number(item.counting) > 0 || Number(item.kg_weight) > 0 || Number(item.pieces_count) > 0) && matchSearch;
    });
  } else {
    // Show Closing Stock of Bin Card Update View Items
    filtered = inventory.filter(item => {
      const hasBinCardData = (Number(item.receipt) > 0 || Number(item.issues) > 0 || 
                              Number(item.return) > 0 || Number(item.section_k) > 0);
      const matchSearch = !filter || item.code.toLowerCase().includes(filter) || item.name.toLowerCase().includes(filter);
      return hasBinCardData && matchSearch;
    });
  }

  if (filtered.length === 0) {
    container.innerHTML = `<div style="text-align:center; padding:30px; color:var(--text-muted);">දත්ත කිසිවක් හමු නොවීය.</div>`;
    return;
  }

  let html = '';
  filtered.forEach(item => {
    const originalIndex = inventory.findIndex(i => i.code === item.code);
    const closing = calculateClosingStock(item);

    if (countingOnly) {
      // Display Counting details with KG Weight and Pieces Count
      html += `
        <div class="checklist-item" id="item-card-${originalIndex}" onclick="openEditCountingModal(${originalIndex})">
          <div style="display:flex; flex-direction:column; gap:4px; flex:1;">
            <span style="font-size:0.98rem; font-weight:700; color:var(--text-dark);">${item.name}</span>
            <span style="font-size:0.8rem; color:var(--text-muted);">Code: ${item.code} | UOM: ${item.uom}</span>
            <div style="display:flex; gap:10px; margin-top:4px; font-size:0.8rem;">
              <span style="color:var(--primary); font-weight:700;">KG: ${item.kg_weight || 0}</span>
              <span style="color:var(--warning); font-weight:700;">Pieces: ${item.pieces_count || 0}</span>
            </div>
          </div>
          <div style="text-align:right;">
            <div style="font-size:1.1rem; font-weight:800; color:var(--primary);">${item.counting || 0}</div>
            <div style="font-size:0.75rem; color:var(--text-muted);">Packs: ${item.packs_count || 0}</div>
          </div>
        </div>
      `;
    } else {
      // Display Closing Stock
      html += `
        <div class="checklist-item" id="item-card-${originalIndex}" onclick="openEditCountingModal(${originalIndex})">
          <div style="display:flex; flex-direction:column; gap:2px; flex:1;">
            <span style="font-size:0.98rem; font-weight:700; color:var(--text-dark);">${item.name}</span>
            <span style="font-size:0.8rem; color:var(--text-muted);">Code: ${item.code} | UOM: ${item.uom}</span>
          </div>
          <div style="text-align:right;">
            <div style="font-size:0.75rem; color:var(--text-muted); font-weight:700;">Closing Stock</div>
            <div style="font-size:1.15rem; font-weight:800; color:var(--success);">${closing}</div>
          </div>
        </div>
      `;
    }
  });

  container.innerHTML = html;

  // Add Touch Swipe Event Listeners to cards
  filtered.forEach(item => {
    const originalIndex = inventory.findIndex(i => i.code === item.code);
    const cardEl = document.getElementById(`item-card-${originalIndex}`);
    if (cardEl) setupSwipeRightGesture(cardEl, originalIndex);
  });
}

function setupSwipeRightGesture(element, index) {
  let touchStartX = 0;
  let touchEndX = 0;

  element.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  element.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    if (touchEndX - touchStartX > 50) { // Swiped Right
      openEditCountingModal(index);
    }
  }, { passive: true });
}

function openEditCountingModal(index) {
  currentlyEditingIndex = index;
  const item = inventory[index];
  
  document.getElementById('editModalItemName').innerText = item.name;
  document.getElementById('editModalItemCode').innerText = `Code: ${item.code} | UOM: ${item.uom}`;
  document.getElementById('editCountingAmountInput').value = item.counting || '';
  document.getElementById('editKgWeightInput').value = item.kg_weight || '';
  document.getElementById('editPiecesCountInput').value = item.pieces_count || '';
  document.getElementById('editPacksCountInput').value = item.packs_count || '';
  
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
  const kg = parseFloat(document.getElementById('editKgWeightInput').value) || 0;
  const pcs = parseFloat(document.getElementById('editPiecesCountInput').value) || 0;
  const packs = parseFloat(document.getElementById('editPacksCountInput').value) || 0;

  inventory[currentlyEditingIndex].counting = amt;
  inventory[currentlyEditingIndex].kg_weight = kg;
  inventory[currentlyEditingIndex].pieces_count = pcs;
  inventory[currentlyEditingIndex].packs_count = packs;
  
  saveInventoryData();
  closeEditCountingModal();
  renderTodayUploadedList();
  showToast("Counting & Weight විස්තර යාවත්කාලීන විය!", "success");
}

// ==================== UTILITY FUNCTIONS ====================
function showToast(message, type = 'success') {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  toast.innerHTML = `<i class="fa-solid fa-circle-check" style="font-size:1.2rem;"></i> <span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
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
  if (theme === 'dark') document.documentElement.setAttribute('data-theme', 'dark');
  else if (theme === 'blue') document.documentElement.setAttribute('data-theme', 'blue');
  else document.documentElement.removeAttribute('data-theme');
  
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
  setElHTML('lblAmount', dict.lblAmount);
  setElHTML('btnSave', dict.btnSave);
  setElHTML('txtSettingsTitle', dict.txtSettingsTitle);
  setElHTML('lblFooter', dict.lblFooter);
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
  const ws = XLSX.utils.json_to_sheet(inventory);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "Inventory_Backup");
  const dateStr = new Date().toISOString().slice(0, 10);
  XLSX.writeFile(wb, `RMC_Stock_Backup_${dateStr}.xlsx`);
  showToast("Backup ගොනුව බාගත විය!", "success");
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
  const inputName = document.getElementById('countingFileNameInput').value.trim();
  const dateStr = new Date().toISOString().slice(0, 10);
  const fileName = inputName || `Counting_Sheet_${dateStr}`;

  const exportData = inventory.map(item => ({
    "Code": item.code,
    "Name": item.name,
    "UOM": item.uom,
    "Counting Amount": item.counting,
    "KG Weight": item.kg_weight,
    "Pieces": item.pieces_count,
    "Packs": item.packs_count
  }));

  const ws = XLSX.utils.json_to_sheet(exportData);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "Counting Sheet");
  XLSX.writeFile(wb, `${fileName}.xlsx`);
  showToast("Counting Sheet Excel ගොනුව බාගත විය!", "success");
  closeCountingDownloadModal();
}

function processCountingShare() {
  processCountingDownload();
}

function openExportModal(mode) {
  currentExportMode = mode;
  const modal = document.getElementById('exportModal');
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
  const inputName = document.getElementById('exportFileNameInput').value.trim();
  const dateStr = new Date().toISOString().slice(0, 10);
  const fileName = inputName || `Stock_Counting_${dateStr}`;

  const ws = XLSX.utils.json_to_sheet(inventory);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "Daily Stock");
  XLSX.writeFile(wb, `${fileName}.xlsx`);
  showToast("Excel ගොනුව බාගත විය!", "success");
  closeExportModal();
}
