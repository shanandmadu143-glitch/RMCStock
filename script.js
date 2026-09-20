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
    lblAmount: '<i class="fa-solid fa-calculator"></i> ප්‍රමාණය ඇතුළත් කරන්න:',
    btnSave: '<i class="fa-solid fa-floppy-disk"></i> Save',
    titleExcel: 'Download File & Shift Stock',
    titleShare: 'Share Data File',
    txtSettingsTitle: '<i class="fa-solid fa-sliders" style="color:var(--primary);"></i> සැකසුම් (Settings)',
    lblLanguage: '<i class="fa-solid fa-language" style="color:var(--primary);"></i> භාෂාව තෝරන්න (Language):',
    lblTheme: '<i class="fa-solid fa-palette" style="color:var(--warning);"></i> Theme එක තෝරන්න:',
    lblRestore: '<i class="fa-solid fa-file-import" style="color:var(--success);"></i> Excel (.xlsx) Restore කරන්න:',
    descRestore: 'පෙර Save කරන ලද Excel File එකක් මගින් දත්ත යාවත්කාලීන කරගන්න.',
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
    msgResetConfirm: 'ඔබට නැවත මුල් දත්ත ලබා ගැනීමට අවශ්‍ය බව විශ්වාසද?',
    shareTitle: 'RMC Daily Stock Summary',
    shareSuccess: 'ගොනුව Share කිරීමට සූදානම්!',
    shareNotSupported: 'ඔබගේ බ්‍රවුසරය File Share කිරීමට සහය නොදක්වයි. Direct Download සක්‍රිය විය.',
    msgItemCleared: 'දත්ත ඉවත් කර Closing Stock එක මුල් තත්වයට පත් කරන ලදී!'
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
    msgResetConfirm: 'Are you sure you want to reset to default data?',
    shareTitle: 'RMC Daily Stock Summary',
    shareSuccess: 'File ready to share!',
    shareNotSupported: 'Your browser does not support file sharing. Direct download initiated.',
    msgItemCleared: 'Item data cleared and Closing Stock reset to original!'
  }
};

let currentLang = localStorage.getItem('rmc_app_lang') || 'si';
let currentTheme = localStorage.getItem('rmc_app_theme') || 'light';
let inventory = []; 
let selectedIndex = -1;
let searchDebounceTimeout = null;
let currentExportMode = 'excel'; 

const defaultItems = [ 
  {type: "RM", code: "11067431", name: "SALT - FLOW", uom: "KG", op_stock: 11000, receipt: 0, issues: 0, return: 0, ssl_i: 0, ssl_j: 0, rejection_l: 0}, 
  {type: "RM", code: "11061702", name: "WHITE SUGAR", uom: "KG", op_stock: 2500, receipt: 0, issues: 0, return: 0, ssl_i: 0, ssl_j: 0, rejection_l: 0}, 
  {type: "RM", code: "11002301", name: "MONOSODIUM GLUTAMATE", uom: "KG", op_stock: 4525, receipt: 0, issues: 0, return: 0, ssl_i: 0, ssl_j: 0, rejection_l: 0}, 
  {type: "RM", code: "67548375", name: "ONION POWDER", uom: "KG", op_stock: 120, receipt: 0, issues: 0, return: 0, ssl_i: 0, ssl_j: 0, rejection_l: 0}, 
  {type: "RM", code: "11067473", name: "CITRIC ACID MONOHYDRATE (FOOD GRADE)", uom: "KG", op_stock: 50, receipt: 0, issues: 0, return: 0, ssl_i: 0, ssl_j: 0, rejection_l: 0}, 
  {type: "RM", code: "11002242", name: "SPICE CELERY POWDER", uom: "KG", op_stock: 25, receipt: 0, issues: 0, return: 0, ssl_i: 0, ssl_j: 0, rejection_l: 0}, 
  {type: "RM", code: "67550393", name: "GARLIC POWDER", uom: "KG", op_stock: 25, receipt: 0, issues: 0, return: 0, ssl_i: 0, ssl_j: 0, rejection_l: 0}, 
  {type: "RM", code: "67548417", name: "WHITE PEPPER", uom: "KG", op_stock: 15, receipt: 0, issues: 0, return: 0, ssl_i: 0, ssl_j: 0, rejection_l: 0}, 
  {type: "RM", code: "11002253", name: "SPICE TURMERIC POWDER", uom: "KG", op_stock: 4, receipt: 0, issues: 0, return: 0, ssl_i: 0, ssl_j: 0, rejection_l: 0}, 
  {type: "RM", code: "11061729", name: "I+G SODIUM 5'RIBONUCLEOTID", uom: "KG", op_stock: 40, receipt: 0, issues: 0, return: 0, ssl_i: 0, ssl_j: 0, rejection_l: 0}, 
  {type: "RM", code: "11827361", name: "DRIED CORN STARCH 5% MOISTURE-SSL", uom: "KG", op_stock: 6000, receipt: 0, issues: 0, return: 0, ssl_i: 0, ssl_j: 0, rejection_l: 0}, 
  {type: "RM", code: "11061758", name: "CORN STARCH - IMPORT", uom: "KG", op_stock: 0, receipt: 0, issues: 0, return: 0, ssl_i: 0, ssl_j: 0, rejection_l: 0}, 
  {type: "RM", code: "11067112", name: "YEAST EXTR. MICROGRANUL. STANDARD 18% SA", uom: "KG", op_stock: 400, receipt: 0, issues: 0, return: 0, ssl_i: 0, ssl_j: 0, rejection_l: 0}, 
  {type: "RM", code: "11067118", name: "FLAVOUR CHICKEN POWDER (S-2182)", uom: "KG", op_stock: 25, receipt: 0, issues: 0, return: 0, ssl_i: 0, ssl_j: 0, rejection_l: 0}, 
  {type: "RM", code: "11061730", name: "CARAMEL COLOUR CLASS III (E150C)", uom: "KG", op_stock: 20, receipt: 0, issues: 0, return: 0, ssl_i: 0, ssl_j: 0, rejection_l: 0}, 
  {type: "RM", code: "11067140", name: "MALTO DEXTRIN 18-20 (M20)", uom: "KG", op_stock: 500, receipt: 0, issues: 0, return: 0, ssl_i: 0, ssl_j: 0, rejection_l: 0}, 
  {type: "RM", code: "11002220", name: "SPICE NUTMEG POWDER", uom: "KG", op_stock: 10, receipt: 0, issues: 0, return: 0, ssl_i: 0, ssl_j: 0, rejection_l: 0}, 
  {type: "RM", code: "11002206", name: "SPICE BLACK PEPPER POWDER", uom: "KG", op_stock: 150, receipt: 0, issues: 0, return: 0, ssl_i: 0, ssl_j: 0, rejection_l: 0}, 
  {type: "RM", code: "11002213", name: "SPICE CORIANDER POWDER", uom: "KG", op_stock: 0, receipt: 0, issues: 0, return: 0, ssl_i: 0, ssl_j: 0, rejection_l: 0}, 
  {type: "RM", code: "11002214", name: "SPICE CUMIN POWDER", uom: "KG", op_stock: 100, receipt: 0, issues: 0, return: 0, ssl_i: 0, ssl_j: 0, rejection_l: 0}, 
  {type: "RM", code: "11002211", name: "SPICE CLOVE POWDER", uom: "KG", op_stock: 10, receipt: 0, issues: 0, return: 0, ssl_i: 0, ssl_j: 0, rejection_l: 0}, 
  {type: "RM", code: "11002210", name: "SPICE CINNAMON POWDER", uom: "KG", op_stock: 2, receipt: 0, issues: 0, return: 0, ssl_i: 0, ssl_j: 0, rejection_l: 0} 
]; 

document.addEventListener('DOMContentLoaded', () => {
  loadInventoryData();
  applyTheme(currentTheme);
  applyLanguage(currentLang);
  setupEventListeners();
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
        rejection_l: item.rejection_l || 0
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

    searchInput.addEventListener('focus', () => {
      if (searchInput.value.trim().length > 0) {
        handleSearch(searchInput.value.trim());
      }
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

  // Ripple effect on buttons
  document.querySelectorAll('.ripple').forEach(btn => {
    btn.addEventListener('click', function (e) {
      const rect = this.getBoundingClientRect();
      const circle = document.createElement('span');
      const diameter = Math.max(rect.width, rect.height);
      const radius = diameter / 2;
      circle.style.width = circle.style.height = `${diameter}px`;
      circle.style.left = `${e.clientX - rect.left - radius}px`;
      circle.style.top = `${e.clientY - rect.top - radius}px`;
      circle.classList.add('ripple-effect');
      const existing = this.getElementsByClassName('ripple-effect')[0];
      if (existing) existing.remove();
      this.appendChild(circle);
    });
  });

  // Close search results when clicking outside
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
    
    // Add ability to open item details by clicking on the selected badge
    badge.setAttribute('onclick', `openItemDetailModal(${index})`);
    
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
  else if (section === 'I') item.ssl_i = (Number(item.ssl_i) || 0) + val;
  else if (section === 'J') item.ssl_j = (Number(item.ssl_j) || 0) + val;
  else if (section === 'L') item.rejection_l = (Number(item.rejection_l) || 0) + val;

  saveInventoryData();

  amountInput.value = '';

  document.getElementById('dispClosing').innerText = calculateClosingStock(item);

  showToast(`${item.name} ${i18n[currentLang].msgAdded}`, 'success');
}

// ==================== ITEM DETAILS VIEW ====================
function openItemDetailModal(index) {
  const item = inventory[index];
  document.getElementById('detCode').innerText = item.code;
  document.getElementById('detUom').innerText = item.uom;
  document.getElementById('detName').innerText = item.name;
  document.getElementById('detOp').innerText = item.op_stock;
  document.getElementById('detReceipt').innerText = item.receipt || 0;
  document.getElementById('detIssues').innerText = item.issues || 0;
  document.getElementById('detReturn').innerText = item.return || 0;
  document.getElementById('detSslI').innerText = item.ssl_i || 0;
  document.getElementById('detSslJ').innerText = item.ssl_j || 0;
  document.getElementById('detRejectionL').innerText = item.rejection_l || 0;
  document.getElementById('detClosing').innerText = calculateClosingStock(item);
  
  const modal = document.getElementById('itemDetailModal');
  if (modal) modal.classList.add('show');
}

function closeItemDetailModal() {
  const modal = document.getElementById('itemDetailModal');
  if (modal) modal.classList.remove('show');
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
    const hasActivity = (Number(item.receipt) > 0 || Number(item.issues) > 0 || Number(item.return) > 0 || 
                         Number(item.ssl_i) > 0 || Number(item.ssl_j) > 0 || Number(item.rejection_l) > 0);
    
    if (!hasActivity) return false;
    if (!filter) return true;

    return item.code.toLowerCase().includes(filter) || 
           item.name.toLowerCase().includes(filter) ||
           item.uom.toLowerCase().includes(filter);
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 40px 20px; color: var(--text-muted);">
        <i class="fa-solid fa-clipboard-question" style="font-size: 2.5rem; margin-bottom: 12px; color: var(--border-color);"></i>
        <p style="font-weight: 600;">යාවත්කාලීන කරන ලද දත්ත කිසිවක් හමු නොවීය.</p>
        <p style="font-size: 0.85rem; margin-top: 4px;">Settings මඟින් Excel Restore කිරීමෙන් හෝ දත්ත ඇතුළත් කිරීමෙන් පසු මෙහි බලාගත හැක.</p>
      </div>
    `;
    return;
  }

  let html = '';
  filtered.forEach(item => {
    const closing = calculateClosingStock(item);
    
    let detailsHtml = '';
    if (Number(item.receipt) > 0) detailsHtml += `<span style="background:var(--success-light); color:var(--success); padding:3px 8px; border-radius:6px; font-size:0.75rem; font-weight:700;">Receipt: ${item.receipt}</span>`;
    if (Number(item.issues) > 0) detailsHtml += `<span style="background:var(--danger-light); color:var(--danger); padding:3px 8px; border-radius:6px; font-size:0.75rem; font-weight:700;">Issues: ${item.issues}</span>`;
    if (Number(item.return) > 0) detailsHtml += `<span style="background:rgba(245, 158, 11, 0.15); color:var(--warning); padding:3px 8px; border-radius:6px; font-size:0.75rem; font-weight:700;">Return: ${item.return}</span>`;
    if (Number(item.ssl_i) > 0) detailsHtml += `<span style="background:var(--success-light); color:var(--success); padding:3px 8px; border-radius:6px; font-size:0.75rem; font-weight:700;">Recv SSL: ${item.ssl_i}</span>`;
    if (Number(item.ssl_j) > 0) detailsHtml += `<span style="background:var(--danger-light); color:var(--danger); padding:3px 8px; border-radius:6px; font-size:0.75rem; font-weight:700;">Sent SSL: ${item.ssl_j}</span>`;
    if (Number(item.rejection_l) > 0) detailsHtml += `<span style="background:var(--danger-light); color:var(--danger); padding:3px 8px; border-radius:6px; font-size:0.75rem; font-weight:700;">Rejection: ${item.rejection_l}</span>`;

    html += `
      <div class="checklist-item" style="flex-direction: column; align-items: stretch; gap: 10px;">
        <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 10px;">
          <div class="checklist-info">
            <span class="checklist-code"><i class="fa-solid fa-barcode"></i> Code: ${item.code}</span>
            <span class="checklist-name">${item.name}</span>
          </div>
          <div style="text-align: right;">
            <div style="font-size:0.75rem; color:var(--text-muted); font-weight:700;">Closing Stock</div>
            <div style="font-size: 1.1rem; font-weight: 800; color: var(--primary);">${closing} ${item.uom}</div>
          </div>
        </div>
        <div style="display: flex; flex-wrap: wrap; gap: 6px; padding-top: 6px; border-top: 1px dashed var(--border-color);">
          <span style="background:var(--bg-main); color:var(--text-muted); padding:3px 8px; border-radius:6px; font-size:0.75rem; font-weight:700;">Opening: ${item.op_stock}</span>
          ${detailsHtml}
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
}

// ==================== RESTORE EXCEL DATA FIX ====================
function restoreFromXLSX() {
  const fileInput = document.getElementById('xlsxFileInput');
  if (!fileInput || fileInput.files.length === 0) {
    showToast(i18n[currentLang].msgRestoreSelect, 'error');
    return;
  }

  const file = fileInput.files[0];
  showLoading("Restoring Excel Data...");

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

      const headers = jsonData[0].map(h => String(h).toLowerCase().trim());
      
      let codeIdx = headers.findIndex(h => h.includes('code') || h.includes('material code'));
      let nameIdx = headers.findIndex(h => h.includes('name') || h.includes('material name') || h.includes('description'));
      let uomIdx = headers.findIndex(h => h.includes('uom') || h.includes('unit'));
      let opIdx = headers.findIndex(h => h.includes('op') || h.includes('opening') || h.includes('stock'));
      
      let receiptIdx = headers.findIndex(h => h.includes('receipt') || h.includes('f'));
      let issuesIdx = headers.findIndex(h => h.includes('issues') || h.includes('g'));
      let returnIdx = headers.findIndex(h => h.includes('return') || h.includes('h'));
      let sslIIdx = headers.findIndex(h => h.includes('ssl_i') || h.includes('received to ssl') || h.includes('i'));
      let sslJIdx = headers.findIndex(h => h.includes('ssl_j') || h.includes('sent to ssl') || h.includes('j'));
      let rejectionIdx = headers.findIndex(h => h.includes('rejection') || h.includes('l'));

      if (codeIdx === -1) codeIdx = 0;
      if (nameIdx === -1) nameIdx = 1;
      if (uomIdx === -1) uomIdx = 2;
      if (opIdx === -1) opIdx = 3;

      let restoredCount = 0;
      for (let i = 1; i < jsonData.length; i++) {
        const row = jsonData[i];
        if (!row || row.length === 0 || !row[codeIdx]) continue;

        const code = String(row[codeIdx]).trim();
        const name = nameIdx !== -1 && row[nameIdx] ? String(row[nameIdx]).trim() : 'Unknown Material';
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
          if (sslIIdx !== -1 && !isNaN(row[sslIIdx])) existing.ssl_i = Number(row[sslIIdx]);
          if (sslJIdx !== -1 && !isNaN(row[sslJIdx])) existing.ssl_j = Number(row[sslJIdx]);
          if (rejectionIdx !== -1 && !isNaN(row[rejectionIdx])) existing.rejection_l = Number(row[rejectionIdx]);
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
            ssl_i: sslIIdx !== -1 && !isNaN(row[sslIIdx]) ? Number(row[sslIIdx]) : 0,
            ssl_j: sslJIdx !== -1 && !isNaN(row[sslJIdx]) ? Number(row[sslJIdx]) : 0,
            rejection_l: rejectionIdx !== -1 && !isNaN(row[rejectionIdx]) ? Number(row[rejectionIdx]) : 0
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

// ==================== SUPPORTING FUNCTIONS & MODALS ====================

function openRestoreHelpModal() {
  const modal = document.getElementById('restoreHelpModal');
  if (modal) {
    modal.classList.add('show');
    switchHelpTopic('fileType');
  }
}

function closeRestoreHelpModal() {
  const modal = document.getElementById('restoreHelpModal');
  if (modal) modal.classList.remove('show');
}

function switchHelpTopic(topic) {
  const contentBox = document.getElementById('helpContentBox');
  if (!contentBox) return;
  
  if (topic === 'fileType') {
    contentBox.innerHTML = `<strong>1. Upload කළ යුත්තේ මොන වගේ Excel File එකක්ද?</strong><br>ඔබගේ Excel File එකේ Material Code, Name, UOM, සහ Opening Stock වැනි තීරු අනිවාර්යයෙන්ම තිබිය යුතුය.`;
  } else if (topic === 'howToDo') {
    contentBox.innerHTML = `<strong>2. Excel File එකක් Upload කර Restore කරන්නේ කෙසේද?</strong><br>සැකසුම් මෙනුවේ (Settings) ඇති 'Restore Excel Data' බොත්තම ඔබා ඔබගේ .xlsx ගොනුව තෝරන්න. ඉන්පසු දත්ත පද්ධතියට එක් වේ.`;
  } else if (topic === 'appFeatures') {
    contentBox.innerHTML = `<strong>3. Web App එක භාවිතයෙන් කළ හැකි දේවල් මොනවාද?</strong><br>ඔබට දෛනික Stock ගණනය කිරීම්, යාවත්කාලීන කිරීම් සහ අවසාන වාර්තා Excel, CSV, PDF හෝ Share කිරීම මඟින් පහසුවෙන් කළ හැක.`;
  }
}

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
    "Closing Stock": calculateClosingStock(item)
  }));

  const worksheet = XLSX.utils.json_to_sheet(dataToExport);
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, "Inventory_Backup");
  
  const dateStr = new Date().toISOString().slice(0, 10);
  XLSX.writeFile(workbook, `RMC_Stock_Backup_${dateStr}.xlsx`);
  showToast("Backup ගොනුව සාර්ථකව Download විය!", "success");
}

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
  if (!container) return;

  const filter = searchInput ? searchInput.value.toLowerCase().trim() : '';

  const filtered = inventory.filter(item => {
    const hasActivity = (Number(item.receipt) > 0 || Number(item.issues) > 0 || Number(item.return) > 0 || 
                         Number(item.ssl_i) > 0 || Number(item.ssl_j) > 0 || Number(item.rejection_l) > 0);
    
    if (!hasActivity) return false;
    if (!filter) return true;
    return item.code.toLowerCase().includes(filter) || item.name.toLowerCase().includes(filter);
  });

  if (filtered.length === 0) {
    container.innerHTML = `<div style="text-align:center; padding:30px; color:var(--text-muted);">යාවත්කාලීන කරන ලද දත්ත කිසිවක් අද දින හමු නොවීය.</div>`;
    return;
  }

  let html = '';
  filtered.forEach(item => {
    const closing = calculateClosingStock(item);
    let acts = [];
    if(item.receipt > 0) acts.push(`Rec: ${item.receipt}`);
    if(item.issues > 0) acts.push(`Iss: ${item.issues}`);
    if(item.return > 0) acts.push(`Ret: ${item.return}`);
    if(item.ssl_i > 0) acts.push(`SSL-R: ${item.ssl_i}`);
    if(item.ssl_j > 0) acts.push(`SSL-S: ${item.ssl_j}`);
    if(item.rejection_l > 0) acts.push(`Rej: ${item.rejection_l}`);

    html += `
      <div class="checklist-item">
        <div class="checklist-left">
          <div class="checklist-info">
            <span class="checklist-name">${item.name}</span>
            <span class="checklist-code">Code: ${item.code} | UOM: ${item.uom}</span>
            <div style="font-size:0.75rem; color:var(--primary); margin-top:4px; font-weight:600;">${acts.join(' | ')}</div>
          </div>
        </div>
        <div class="checklist-right">
          <div style="font-size:0.75rem; color:var(--text-muted); font-weight:700;">Closing</div>
          <div class="checklist-stock">${closing}</div>
        </div>
      </div>
    `;
  });
  container.innerHTML = html;
}

function openExportModal(mode) {
  currentExportMode = mode;
  const modal = document.getElementById('exportModal');
  const title = document.getElementById('txtExportTitle');
  const btn = document.getElementById('btnConfirmExport');
  
  if (title) title.innerHTML = `<i class="fa-solid fa-file-export" style="color:var(--primary);"></i> ${mode === 'excel' ? i18n[currentLang].titleExcel : i18n[currentLang].titleShare}`;
  if (btn) btn.innerHTML = `<i class="fa-solid ${mode === 'excel' ? 'fa-download' : 'fa-share-nodes'}"></i> ${mode === 'excel' ? 'Download Data' : 'Share File'}`;
  
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
  if (input) input.placeholder = `Stock_Summary_${dateStr}`;
}

// Fixed processExportAction code which was cut off previously
function processExportAction() {
  const format = document.getElementById('exportFormatSelect').value;
  const inputName = document.getElementById('exportFileNameInput').value.trim();
  const dateStr = new Date().toISOString().slice(0, 10);
  const fileName = inputName || `Stock_Summary_${dateStr}`;
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
    "Closing Stock": calculateClosingStock(item)
  }));

  if (format === 'xlsx') {
    const ws = XLSX.utils.json_to_sheet(exportData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Daily Stock Summary");
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
  } else if (format === 'txt') {
    let txt = "Material Code\tMaterial Name\tUOM\tOpening Stock\tReceipt (F)\tIssues (G)\tReturn (H)\tReceived SSL (I)\tSent SSL (J)\tRejection (L)\tClosing Stock\n";
    exportData.forEach(r => {
      txt += `${r["Material Code"]}\t${r["Material Name"]}\t${r["UOM"]}\t${r["Opening Stock"]}\t${r["Receipt (F)"]}\t${r["Issues (G)"]}\t${r["Return (H)"]}\t${r["Received to SSL (I)"]}\t${r["Sent to SSL (J)"]}\t${r["Rejection (L)"]}\t${r["Closing Stock"]}\n`;
    });
    const blob = new Blob([txt], { type: 'text/plain;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${fileName}.txt`;
    a.click();
  }

  // Shift logic fix
  if (shiftStock) {
    inventory.forEach(item => {
      item.op_stock = calculateClosingStock(item);
      item.receipt = 0;
      item.issues = 0;
      item.return = 0;
      item.ssl_i = 0;
      item.ssl_j = 0;
      item.rejection_l = 0;
    });
    saveInventoryData();
  }

  closeExportModal();
  showToast(i18n[currentLang].msgExcelShift, 'success');
  if (currentExportMode === 'share') {
    setTimeout(() => {
      alert(i18n[currentLang].shareSuccess);
    }, 500);
  }
}
