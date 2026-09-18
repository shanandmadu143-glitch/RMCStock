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
    btnBinCardView: '<i class="fa-solid fa-table-list"></i> Bin Card Update View',
    txtBinCardTitle: '<i class="fa-solid fa-table-list" style="color:var(--success);"></i> Bin Card Update View',
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
    msgRestoreSuccess: 'Excel Restore සාර්ථකයි! Bin Card Update View හරහා දත්ත පරික්ෂා කරන්න.',
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
    optCounting: 'Counting',
    lblAmount: '<i class="fa-solid fa-calculator"></i> Enter Amount:',
    btnSave: '<i class="fa-solid fa-floppy-disk"></i> Save',
    btnBinCardView: '<i class="fa-solid fa-table-list"></i> Bin Card Update View',
    txtBinCardTitle: '<i class="fa-solid fa-table-list" style="color:var(--success);"></i> Bin Card Update View',
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
let currentlyEditingIndex = -1;

const defaultItems = [ 
  {type: "RM", code: "11067431", name: "SALT - FLOW", uom: "KG", op_stock: 11000}, 
  {type: "RM", code: "11061702", name: "WHITE SUGAR", uom: "KG", op_stock: 2500}, 
  {type: "RM", code: "11002301", name: "MONOSODIUM GLUTAMATE", uom: "KG", op_stock: 4525}, 
  {type: "RM", code: "67548375", name: "ONION POWDER", uom: "KG", op_stock: 120}, 
  {type: "RM", code: "11067473", name: "CITRIC ACID MONOHYDRATE (FOOD GRADE)", uom: "KG", op_stock: 50}, 
  {type: "RM", code: "11002242", name: "SPICE CELERY POWDER", uom: "KG", op_stock: 25}, 
  {type: "RM", code: "67550393", name: "GARLIC POWDER", uom: "KG", op_stock: 25}, 
  {type: "RM", code: "67548417", name: "WHITE PEPPER", uom: "KG", op_stock: 15}, 
  {type: "RM", code: "11002253", name: "SPICE TURMERIC POWDER", uom: "KG", op_stock: 4}, 
  {type: "RM", code: "11061729", name: "I+G SODIUM 5'RIBONUCLEOTID", uom: "KG", op_stock: 40}, 
  {type: "RM", code: "11827361", name: "DRIED CORN STARCH 5% MOISTURE-SSL", uom: "KG", op_stock: 6000}, 
  {type: "RM", code: "11061758", name: "CORN STARCH - IMPORT", uom: "KG", op_stock: 0}, 
  {type: "RM", code: "11067112", name: "YEAST EXTR. MICROGRANUL. STANDARD 18% SA", uom: "KG", op_stock: 400}, 
  {type: "RM", code: "11067118", name: "FLAVOUR CHICKEN POWDER (S-2182)", uom: "KG", op_stock: 25}, 
  {type: "RM", code: "11061730", name: "CARAMEL COLOUR CLASS III (E150C)", uom: "KG", op_stock: 20}, 
  {type: "RM", code: "11067140", name: "MALTO DEXTRIN 18-20 (M20)", uom: "KG", op_stock: 500}, 
  {type: "RM", code: "11002220", name: "SPICE NUTMEG POWDER", uom: "KG", op_stock: 10}, 
  {type: "RM", code: "11002206", name: "SPICE BLACK PEPPER POWDER", uom: "KG", op_stock: 150}, 
  {type: "RM", code: "11002213", name: "SPICE CORIANDER POWDER", uom: "KG", op_stock: 0}, 
  {type: "RM", code: "11002214", name: "SPICE CUMIN POWDER", uom: "KG", op_stock: 100}, 
  {type: "RM", code: "11002211", name: "SPICE CLOVE POWDER", uom: "KG", op_stock: 10}, 
  {type: "RM", code: "11002210", name: "SPICE CINNAMON POWDER", uom: "KG", op_stock: 2} 
]; 

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
    if (btnBinCardView) btnBinCardView.style.display = 'inline-flex';
  }
}

function showLoading(text = "Processing...") {
  const el = document.getElementById('loadingText');
  if (el) el.innerText = text;
  const overlay = document.getElementById('loadingOverlay');
  if (overlay) overlay.style.display = 'flex';
}

function hideLoading() {
  const overlay = document.getElementById('loadingOverlay');
  if (overlay) overlay.style.display = 'none';
}

function applyTheme(theme) {
  currentTheme = theme;
  document.documentElement.setAttribute('data-theme', theme);
  const themeSelect = document.getElementById('themeSelect');
  if (themeSelect) themeSelect.value = theme;
  localStorage.setItem('rmc_app_theme', theme);
}
function changeTheme(theme) { applyTheme(theme); }

function applyLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('rmc_app_lang', lang);
  const langSelect = document.getElementById('langSelect');
  if (langSelect) langSelect.value = lang;
  
  const t = i18n[lang] || i18n['si'];
  const setHtml = (id, html) => { const el = document.getElementById(id); if(el) el.innerHTML = html; };
  const setText = (id, text) => { const el = document.getElementById(id); if(el) el.innerText = text; };

  setHtml('lblSearch', t.lblSearch);
  const searchInputEl = document.getElementById('searchInput');
  if(searchInputEl) searchInputEl.placeholder = t.placeholderSearch;
  setHtml('lblSection', t.lblSection);
  setText('optReceipt', t.optReceipt);
  setText('optIssues', t.optIssues);
  setText('optReturn', t.optReturn);
  setText('optSslI', t.optSslI);
  setText('optSslJ', t.optSslJ);
  setText('optRejectionL', t.optRejectionL);
  setText('optCounting', t.optCounting);
  setHtml('lblAmount', t.lblAmount);
  setHtml('btnSave', t.btnSave);
  setHtml('btnBinCardView', t.btnBinCardView);
  setHtml('txtBinCardTitle', t.txtBinCardTitle);
  
  const btnExcel = document.getElementById('btnExcel'); if(btnExcel) btnExcel.title = t.titleExcel;
  const btnShare = document.getElementById('btnShare'); if(btnShare) btnShare.title = t.titleShare;
  
  setHtml('txtSettingsTitle', t.txtSettingsTitle);
  setHtml('lblLanguage', t.lblLanguage);
  setHtml('lblTheme', t.lblTheme);
  setHtml('lblRestore', t.lblRestore);
  setText('descRestore', t.descRestore);
  setHtml('btnRestore', t.btnRestore);
  setHtml('lblBackup', t.lblBackup);
  setText('descBackup', t.descBackup);
  setHtml('lblReset', t.lblReset);
  setText('descReset', t.descReset);
  setHtml('btnReset', t.btnReset);
  setHtml('lblFooter', t.lblFooter);
}
function changeLanguage(lang) { applyLanguage(lang); }

function showToast(message, type = 'success') { 
  const container = document.getElementById('toastContainer'); 
  if (!container) return;
  const toast = document.createElement('div'); 
  toast.className = `toast toast-${type}`; 
  let iconClass = 'fa-circle-check'; 
  if (type === 'error') iconClass = 'fa-circle-xmark'; 
  if (type === 'warning') iconClass = 'fa-triangle-exclamation'; 
  toast.innerHTML = `<i class="fa-solid ${iconClass}" style="font-size: 1.2rem; color: var(--${type === 'success' ? 'success' : type === 'error' ? 'danger' : 'warning'});"></i> <span>${message}</span>`; 
  container.appendChild(toast); 
  
  setTimeout(() => { 
    toast.style.opacity = '0';
    toast.style.transform = 'scale(0.8) translateY(20px)';
    setTimeout(() => toast.remove(), 250);
  }, 2500); 
} 

function getTodayStr() {
  const d = new Date();
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function roundNum(val) {
  return Math.round((Number(val) + Number.EPSILON) * 1000) / 1000;
}

function calculateClosingStock(item) {
  const op = Number(item.op_stock) || 0;
  const receipt = Number(item.f_receipt) || 0;
  const issues = Number(item.g_issues) || 0;
  const ret = Number(item.h_return) || 0;
  const sslRec = Number(item.i_ssl_received) || 0;
  const sslSent = Number(item.j_ssl_sent) || 0;
  const rejection = Number(item.l_rejection) || 0;

  return roundNum(op + receipt - issues + ret + sslRec - sslSent - rejection);
}

function loadInventoryData() { 
  const savedData = localStorage.getItem('rmc_stock_inventory'); 
  if (savedData) { 
    try { 
      inventory = JSON.parse(savedData); 
      inventory.forEach(item => {
        item.op_stock = Number(item.op_stock) || 0;
        item.f_receipt = Number(item.f_receipt) || 0;
        item.g_issues = Number(item.g_issues) || 0;
        item.h_return = Number(item.h_return) || 0;
        item.i_ssl_received = Number(item.i_ssl_received) || 0;
        item.j_ssl_sent = Number(item.j_ssl_sent) || 0;
        item.l_rejection = Number(item.l_rejection) || 0;
        item.counting = Number(item.counting) || 0;
        item.packs_count = Number(item.packs_count) || 0;
        item.closing = calculateClosingStock(item);
        item.last_updated = item.last_updated || "";
      });
    } catch(e) { initDefaultInventory(); } 
  } else { initDefaultInventory(); } 
} 

function initDefaultInventory() { 
  inventory = defaultItems.map(item => ({ 
    ...item, op_stock: Number(item.op_stock) || 0,
    f_receipt: 0, g_issues: 0, h_return: 0, i_ssl_received: 0, 
    j_ssl_sent: 0, l_rejection: 0, counting: 0, packs_count: 0,
    closing: Number(item.op_stock) || 0, last_updated: ""
  })); 
  saveInventoryData(); 
} 
function saveInventoryData() { localStorage.setItem('rmc_stock_inventory', JSON.stringify(inventory)); } 

function updateVisibilityState(isTypingOrSelected) {
  const footerNote = document.getElementById('lblFooter');
  if (footerNote) footerNote.style.display = isTypingOrSelected ? 'none' : 'block';
}

function updateClearBtnVisibility() {
  const searchInput = document.getElementById('searchInput');
  const clearSearchBtn = document.getElementById('clearSearchBtn');
  if (!clearSearchBtn || !searchInput) return;
  if (searchInput.value.trim() !== '' || selectedIndex !== -1) {
    clearSearchBtn.style.display = 'flex';
  } else {
    clearSearchBtn.style.display = 'none';
  }
}

function clearSearchInput() {
  const searchInput = document.getElementById('searchInput');
  const selectedBadge = document.getElementById('selectedBadge');
  const searchResults = document.getElementById('searchResults');
  
  if (searchInput) searchInput.value = '';
  selectedIndex = -1;
  if (selectedBadge) selectedBadge.style.display = 'none';
  if (searchResults) searchResults.style.display = 'none';
  
  const packsCount = document.getElementById('inputPacksCount');
  if (packsCount) packsCount.value = '';

  updateVisibilityState(false);
  updateClearBtnVisibility();
  if (searchInput) searchInput.focus();
}

function selectItem(index) { 
  selectedIndex = index; 
  const item = inventory[index]; 
  if (!item) return;
  
  const searchInput = document.getElementById('searchInput');
  const searchResults = document.getElementById('searchResults');
  const selectedBadge = document.getElementById('selectedBadge');

  if (searchInput) searchInput.value = `${item.code} - ${item.name}`; 
  if (searchResults) searchResults.style.display = 'none'; 
  
  item.closing = calculateClosingStock(item);

  const dispCode = document.getElementById('dispCode'); if(dispCode) dispCode.innerText = item.code; 
  const dispName = document.getElementById('dispName'); if(dispName) dispName.innerText = item.name; 
  const dispUom = document.getElementById('dispUom'); if(dispUom) dispUom.innerText = item.uom; 
  const dispClosing = document.getElementById('dispClosing'); if(dispClosing) dispClosing.innerText = Number(item.closing).toLocaleString() + ' ' + item.uom; 
  
  if(selectedBadge) selectedBadge.style.display = 'block'; 
  updateVisibilityState(true);
  updateClearBtnVisibility();

  const inputAmount = document.getElementById('inputAmount');
  if (inputAmount) inputAmount.focus();
} 

function addSingleSectionData() { 
  const t = i18n[currentLang] || i18n['si'];
  if (selectedIndex === -1 || !inventory[selectedIndex]) { showToast(t.msgSelectMaterial, 'warning'); return; } 
  
  const sectionSelect = document.getElementById('sectionSelect');
  const inputAmount = document.getElementById('inputAmount');
  const packsCountInput = document.getElementById('inputPacksCount');
  
  if (!sectionSelect || !inputAmount) return;

  const targetSection = sectionSelect.value; 
  const rawVal = inputAmount.value.trim();
  const amount = parseFloat(rawVal) || 0; 
  
  if (rawVal === "" || isNaN(amount) || amount <= 0 || rawVal.includes('-') || rawVal.includes('+') || rawVal.toLowerCase().includes('e')) { 
    showToast(t.msgValidAmount, 'error'); 
    inputAmount.focus();
    return; 
  } 
  
  let item = inventory[selectedIndex]; 
  
  if (targetSection === 'F') item.f_receipt = roundNum(item.f_receipt + amount); 
  else if (targetSection === 'G') item.g_issues = roundNum(item.g_issues + amount); 
  else if (targetSection === 'H') item.h_return = roundNum(item.h_return + amount); 
  else if (targetSection === 'I') item.i_ssl_received = roundNum(item.i_ssl_received + amount); 
  else if (targetSection === 'J') item.j_ssl_sent = roundNum(item.j_ssl_sent + amount); 
  else if (targetSection === 'L') item.l_rejection = roundNum(item.l_rejection + amount); 
  else if (targetSection === 'COUNTING') {
    item.counting = roundNum(amount); 
    if (packsCountInput) item.packs_count = parseFloat(packsCountInput.value) || 0;
  }

  item.closing = calculateClosingStock(item); 
  item.last_updated = getTodayStr();

  const dispClosing = document.getElementById('dispClosing');
  if (dispClosing) dispClosing.innerText = Number(item.closing).toLocaleString() + ' ' + item.uom;

  saveInventoryData(); 
  inputAmount.value = ''; 
  if (packsCountInput) packsCountInput.value = '';

  showToast(`${item.name} [${targetSection}] - ${amount} ${t.msgAdded}`, 'success'); 
  clearSearchInput();
} 

function showModal(modalId) {
  const modal = document.getElementById(modalId);
  if (!modal) return;
  modal.style.display = 'flex';
  document.body.style.overflow = 'hidden';
  requestAnimationFrame(() => { modal.classList.add('show'); });
}

function hideModal(modalId) {
  const modal = document.getElementById(modalId);
  if (!modal) return;
  modal.classList.remove('show');
  document.body.style.overflow = 'auto';
  setTimeout(() => { modal.style.display = 'none'; }, 250);
}

/* Bin Card Update View Modal Functions */
function openBinCardModal() {
  const searchInput = document.getElementById('binCardSearchInput');
  if (searchInput) searchInput.value = '';
  renderBinCardList();
  showModal('binCardModal');
}

function closeBinCardModal() {
  hideModal('binCardModal');
}

function renderBinCardList() {
  const tbody = document.getElementById('binCardTableBody');
  if (!tbody) return;
  tbody.innerHTML = '';

  const searchVal = document.getElementById('binCardSearchInput') ? document.getElementById('binCardSearchInput').value.toLowerCase().trim() : '';
  const onlyMovements = document.getElementById('toggleBinCardMovementsOnly')?.checked || false;

  let count = 0;
  const fragment = document.createDocumentFragment();

  inventory.forEach((item) => {
    item.closing = calculateClosingStock(item);
    
    const hasMovement = (item.f_receipt > 0 || item.g_issues > 0 || item.h_return > 0 || 
                         item.i_ssl_received > 0 || item.j_ssl_sent > 0 || item.l_rejection > 0);

    if (onlyMovements && !hasMovement) return;

    const matchesSearch = (String(item.name) + " " + String(item.code)).toLowerCase().includes(searchVal);
    if (matchesSearch) {
      count++;
      const tr = document.createElement('tr');
      if (hasMovement) tr.className = 'highlight-movement';

      tr.innerHTML = `
        <td style="font-weight:700;"><i class="fa-solid fa-barcode" style="color:var(--text-muted); font-size:0.75rem;"></i> ${item.code}</td>
        <td style="font-weight:600; color:var(--text-dark);">${item.name}</td>
        <td style="text-align:center;"><span style="background:var(--primary-light); color:var(--primary); padding:2px 6px; border-radius:6px; font-weight:700; font-size:0.75rem;">${item.uom}</span></td>
        <td style="text-align:right; font-weight:${item.f_receipt > 0 ? '700' : '400'}; color:${item.f_receipt > 0 ? 'var(--success)' : 'inherit'};">${item.f_receipt > 0 ? Number(item.f_receipt).toLocaleString() : '-'}</td>
        <td style="text-align:right; font-weight:${item.g_issues > 0 ? '700' : '400'}; color:${item.g_issues > 0 ? 'var(--danger)' : 'inherit'};">${item.g_issues > 0 ? Number(item.g_issues).toLocaleString() : '-'}</td>
        <td style="text-align:right; font-weight:${item.h_return > 0 ? '700' : '400'}; color:${item.h_return > 0 ? 'var(--warning)' : 'inherit'};">${item.h_return > 0 ? Number(item.h_return).toLocaleString() : '-'}</td>
        <td style="text-align:right; font-weight:${item.i_ssl_received > 0 ? '700' : '400'}; color:${item.i_ssl_received > 0 ? 'var(--success)' : 'inherit'};">${item.i_ssl_received > 0 ? Number(item.i_ssl_received).toLocaleString() : '-'}</td>
        <td style="text-align:right; font-weight:${item.j_ssl_sent > 0 ? '700' : '400'}; color:${item.j_ssl_sent > 0 ? 'var(--danger)' : 'inherit'};">${item.j_ssl_sent > 0 ? Number(item.j_ssl_sent).toLocaleString() : '-'}</td>
        <td style="text-align:right; font-weight:${item.l_rejection > 0 ? '700' : '400'}; color:${item.l_rejection > 0 ? 'var(--danger)' : 'inherit'};">${item.l_rejection > 0 ? Number(item.l_rejection).toLocaleString() : '-'}</td>
        <td style="text-align:right; font-weight:800; color:var(--primary);">${Number(item.closing).toLocaleString()}</td>
      `;
      fragment.appendChild(tr);
    }
  });

  if (count === 0) {
    const tr = document.createElement('tr');
    tr.innerHTML = `<td colspan="10" style="text-align:center; padding: 25px; color: var(--text-muted); font-weight:600;">දත්ත කිසිවක් හමු නොවීය.</td>`;
    tbody.appendChild(tr);
  } else {
    tbody.appendChild(fragment);
  }
}

function printBinCardData() {
  if (!window.jspdf) {
    window.print();
    return;
  }
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF('landscape');
  doc.setFontSize(16);
  doc.text("Bin Card Update Sheet", 14, 15);
  doc.setFontSize(10);
  doc.text(`Date: ${getTodayStr()}`, 14, 22);

  const tableData = inventory.map(item => [
    item.code || "",
    item.name || "",
    item.uom || "",
    item.op_stock || 0,
    item.f_receipt || 0,
    item.g_issues || 0,
    item.h_return || 0,
    item.i_ssl_received || 0,
    item.j_ssl_sent || 0,
    item.l_rejection || 0,
    calculateClosingStock(item)
  ]);

  doc.autoTable({
    startY: 28,
    head: [['Code', 'Material Name', 'UOM', 'Op.Stock', 'Receipt (F)', 'Issues (G)', 'Return (H)', 'Rec.SSL (I)', 'Sent SSL (J)', 'Reject (L)', 'Closing']],
    body: tableData,
    theme: 'grid',
    headStyles: { fillColor: [5, 150, 105] },
    styles: { fontSize: 8 }
  });

  doc.save(`Bin_Card_Update_${getTodayStr()}.pdf`);
}

function openTodayUploadedModal() {
  const todaySearchInput = document.getElementById('todayModalSearchInput');
  if (todaySearchInput) todaySearchInput.value = '';
  renderTodayUploadedList();
  showModal('todayUploadedModal');
}
function closeTodayUploadedModal() { hideModal('todayUploadedModal'); }

function renderTodayUploadedList() {
  const container = document.getElementById('todayCardsContainer');
  if (!container) return;
  container.innerHTML = '';

  const todayStr = getTodayStr();
  const searchInputVal = document.getElementById('todayModalSearchInput');
  const showCountingOnly = document.getElementById('toggleCountingOnly')?.checked || false;
  const q = searchInputVal ? searchInputVal.value.toLowerCase().trim() : '';
  const fragment = document.createDocumentFragment();

  let count = 0;

  inventory.forEach((item, idx) => {
    item.closing = calculateClosingStock(item);
    let matchesCondition = false;
    
    if (showCountingOnly) { matchesCondition = (item.counting > 0); } 
    else {
      matchesCondition = (item.last_updated === todayStr) || 
                         (item.f_receipt > 0 || item.g_issues > 0 || item.h_return > 0 || item.i_ssl_received > 0 || item.j_ssl_sent > 0 || item.l_rejection > 0 || item.counting > 0);
    }

    if (matchesCondition) {
      const matchesSearch = (String(item.name) + " " + String(item.code)).toLowerCase().includes(q);
      if (matchesSearch) {
        count++;

        if (showCountingOnly) {
          const swipeWrapper = document.createElement('div');
          swipeWrapper.className = 'swipe-wrapper';

          const packDetailText = (item.packs_count > 0) ? `<br><span style="color:var(--primary); font-size:0.75rem;">(${item.packs_count} packs)</span>` : '';

          swipeWrapper.innerHTML = `
            <div class="swipe-action edit-action"><i class="fa-solid fa-pen-to-square"></i> Edit</div>
            <div class="swipe-action delete-action"><i class="fa-solid fa-trash-can"></i> Delete</div>
            <div class="checklist-item" id="swipe-item-${idx}">
              <div class="checklist-left">
                <div class="checklist-info">
                  <div class="checklist-name" title="${item.name}">${item.name}</div>
                  <div class="checklist-code"><i class="fa-solid fa-barcode"></i> ${item.code} ${packDetailText}</div>
                </div>
              </div>
              <div class="checklist-right">
                <div class="checklist-stock" style="color:var(--primary);">${Number(item.counting).toLocaleString()} ${item.uom}</div>
                <div style="font-size: 0.68rem; color: var(--primary); font-weight: 700; text-transform: uppercase;">Counting Amount</div>
              </div>
            </div>
          `;

          const cardItem = swipeWrapper.querySelector('.checklist-item');
          setupSwipeEvents(swipeWrapper, cardItem, idx);
          fragment.appendChild(swipeWrapper);

        } else {
          const itemDiv = document.createElement('div');
          itemDiv.className = 'checklist-item';
          itemDiv.innerHTML = ` 
            <div class="checklist-left">
              <div class="checklist-info">
                <div class="checklist-name" title="${item.name}">${item.name}</div>
                <div class="checklist-code"><i class="fa-solid fa-barcode"></i> ${item.code}</div>
              </div>
            </div>
            <div class="checklist-right">
              <div class="checklist-stock">${Number(item.closing).toLocaleString()} ${item.uom}</div>
              <div style="font-size: 0.68rem; color: var(--success); font-weight: 700; text-transform: uppercase;">Today Live</div>
            </div>
          `;
          itemDiv.onclick = () => openItemDetails(idx);
          fragment.appendChild(itemDiv);
        }
      }
    }
  });

  if (count === 0) {
    const noDataText = showCountingOnly ? "Counting දත්ත කිසිවක් ඇතුළත් කර නැත." : "දත්ත කිසිවක් ඇතුළත් කර නැත.";
    container.innerHTML = `<div style="text-align:center; padding: 30px; color: var(--text-muted); font-weight:600;">${noDataText}</div>`;
  } else { container.appendChild(fragment); }
}

function setupSwipeEvents(wrapper, itemEl, index) {
  let startX = 0; let currentX = 0; let isDragging = false;

  const onStart = (e) => {
    startX = e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
    isDragging = true;
    itemEl.style.transition = 'none';
  };
  const onMove = (e) => {
    if (!isDragging) return;
    const x = e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
    const diff = x - startX;
    if (Math.abs(diff) < 120) {
      currentX = diff;
      itemEl.style.transform = `translateX(${currentX}px)`;
    }
  };
  const onEnd = () => {
    if (!isDragging) return;
    isDragging = false;
    itemEl.style.transition = 'transform 0.2s ease-out';
    if (currentX < -60) {
      itemEl.style.transform = 'translateX(0px)';
      openEditCountingModal(index);
    } else if (currentX > 60) {
      itemEl.style.transform = 'translateX(0px)';
      deleteCountingAmount(index);
    } else { itemEl.style.transform = 'translateX(0px)'; }
    currentX = 0;
  };

  itemEl.addEventListener('touchstart', onStart, { passive: true });
  itemEl.addEventListener('touchmove', onMove, { passive: true });
  itemEl.addEventListener('touchend', onEnd);
  itemEl.addEventListener('mousedown', onStart);
  window.addEventListener('mousemove', onMove);
  window.addEventListener('mouseup', onEnd);
}

function openEditCountingModal(index) {
  currentlyEditingIndex = index;
  const item = inventory[index];
  if (!item) return;

  document.getElementById('editModalItemName').innerText = item.name;
  document.getElementById('editModalItemCode').innerText = `Code: ${item.code} | UOM: ${item.uom}`;
  document.getElementById('editCountingAmountInput').value = item.counting || '';
  document.getElementById('editPacksCountInput').value = item.packs_count || '';

  showModal('editCountingModal');
  setTimeout(() => document.getElementById('editCountingAmountInput').focus(), 250);
}
function closeEditCountingModal() { hideModal('editCountingModal'); currentlyEditingIndex = -1; }

function saveEditedCountingAmount() {
  if (currentlyEditingIndex === -1 || !inventory[currentlyEditingIndex]) return;

  const rawVal = document.getElementById('editCountingAmountInput').value.trim();
  const amount = parseFloat(rawVal) || 0;

  if (rawVal === "" || isNaN(amount) || amount < 0) {
    showToast("කරුණාකර වලංගු අගයක් ඇතුළත් කරන්න!", "error"); return;
  }

  const item = inventory[currentlyEditingIndex];
  item.counting = roundNum(amount);
  item.packs_count = parseFloat(document.getElementById('editPacksCountInput').value) || 0;
  item.closing = calculateClosingStock(item);
  item.last_updated = getTodayStr();

  saveInventoryData();
  closeEditCountingModal();
  renderTodayUploadedList();
  showToast(`${item.name} - Counting Amount updated to ${amount}`, 'success');
}

function deleteCountingAmount(index) {
  const item = inventory[index];
  if (!item) return;
  if (confirm(`${item.name} හි Counting Amount එක ඉවත් (Delete) කිරීමට අවශ්‍යද?`)) {
    item.counting = 0;
    item.packs_count = 0;
    item.closing = calculateClosingStock(item);
    saveInventoryData();
    renderTodayUploadedList();
    showToast(`${item.name} Counting Amount deleted!`, 'warning');
  }
}

function openSettings() { showModal('settingsModal'); } 
function closeSettings() { hideModal('settingsModal'); } 

function openRestoreHelpModal() { showModal('restoreHelpModal'); switchHelpTopic('fileType'); }
function closeRestoreHelpModal() { hideModal('restoreHelpModal'); }

function openExportModal(mode) {
  currentExportMode = mode;
  updateDefaultFileName();
  showModal('exportModal');
}
function closeExportModal() { hideModal('exportModal'); }

function openCountingDownloadModal() { updateCountingFileName(); showModal('countingDownloadModal'); }
function closeCountingDownloadModal() { hideModal('countingDownloadModal'); }

function updateCountingFileName() {
  const format = document.getElementById('countingFormatSelect').value;
  const input = document.getElementById('countingFileNameInput');
  if (input) input.value = `Counting_Sheet_${getTodayStr()}.${format}`;
}

function processCountingDownload() { processCountingSheet('download'); }
function processCountingShare() { processCountingSheet('share'); }

async function processCountingSheet(action) {
  const format = document.getElementById('countingFormatSelect').value;
  const today = getTodayStr();
  
  let fileNameInput = document.getElementById('countingFileNameInput').value.trim();
  if (!fileNameInput) fileNameInput = `Counting_Sheet_${today}.${format}`;
  if (!fileNameInput.endsWith(`.${format}`)) fileNameInput += `.${format}`;
  
  const filename = fileNameInput;
  let fileBlob = null; let mimeType = '';

  showLoading(`Processing ${format.toUpperCase()}...`);

  setTimeout(async () => {
    try {
      if (format === 'xlsx') {
        const headers = ["Material Code", "Material Name", "RM/PM", "Counting Amount", "Packs Count"];
        const sheetData = [headers];
        inventory.forEach((item) => {
          sheetData.push([item.code || "", item.name || "", item.type || "RM", Number(item.counting) || 0, Number(item.packs_count) || 0]);
        });
        const worksheet = XLSX.utils.aoa_to_sheet(sheetData);
        worksheet['!cols'] = [{ wch: 18 }, { wch: 40 }, { wch: 10 }, { wch: 18 }, { wch: 14 }];
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Counting");
        const buffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
        mimeType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
        fileBlob = new Blob([buffer], { type: mimeType });
      } 
      else if (format === 'pdf') {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();
        doc.setFontSize(16); doc.text("Stock Counting Sheet", 14, 15);
        doc.setFontSize(10); doc.text(`Date: ${today}`, 14, 22);
        const tableData = inventory.map(item => [item.code, item.name, item.type || "RM", item.counting || 0, item.packs_count || 0]);
        doc.autoTable({ startY: 28, head: [['Code', 'Material Name', 'Type', 'Counting', 'Packs']], body: tableData, theme: 'grid', headStyles: { fillColor: [37, 99, 235] } });
        fileBlob = doc.output('blob'); mimeType = 'application/pdf';
      } 
      else if (format === 'doc') {
        const header = "<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'><head><meta charset='utf-8'><title>Counting Sheet</title></head><body>";
        const footer = "</body></html>";
        let html = `<h2>Stock Counting Sheet - ${today}</h2>`;
        html += `<table border='1' style='border-collapse: collapse; width: 100%;'><tr><th>Code</th><th>Name</th><th>Type</th><th>Counting</th><th>Packs</th></tr>`;
        inventory.forEach(item => { html += `<tr><td>${item.code}</td><td>${item.name}</td><td>${item.type || 'RM'}</td><td>${item.counting || 0}</td><td>${item.packs_count || 0}</td></tr>`; });
        html += "</table>";
        mimeType = 'application/msword';
        fileBlob = new Blob(['\ufeff', header + html + footer], { type: mimeType });
      }

      closeCountingDownloadModal();

      if (action === 'download') {
        triggerDirectDownload(fileBlob, filename);
        showToast(`${format.toUpperCase()} Downloaded Successfully!`, 'success');
      } else if (action === 'share') {
        const file = new File([fileBlob], filename, { type: mimeType });
        if (navigator.canShare && navigator.canShare({ files: [file] })) {
            try {
                await navigator.share({ title: `Counting Sheet - ${today}`, text: 'Please find the Counting Sheet attached.', files: [file] });
                showToast('Shared successfully!', 'success');
            } catch (err) {
                if (err.name !== 'AbortError') { triggerDirectDownload(fileBlob, filename); showToast('Share failed. Downloaded directly.', 'warning'); }
            }
        } else {
            triggerDirectDownload(fileBlob, filename); showToast('Sharing not supported. File downloaded.', 'warning');
        }
      }
    } catch (error) { showToast(`Error processing ${format.toUpperCase()}!`, 'error'); }
    hideLoading();
  }, 400);
}

function updateDefaultFileName() {
  const formatSelect = document.getElementById('exportFormatSelect');
  const fileNameInput = document.getElementById('exportFileNameInput');
  if (!formatSelect || !fileNameInput) return;
  fileNameInput.value = `Stock_Counting_${getTodayStr()}.${formatSelect.value}`;
}

function switchHelpTopic(topic) {
  const box = document.getElementById('helpContentBox');
  if (!box) return;
  if (topic === 'fileType') {
    box.innerHTML = `<h4 style="color: var(--primary); margin-bottom: 8px;"><i class="fa-solid fa-file-excel"></i> Upload කළ යුත්තේ මොන වගේ File එකක්ද?</h4><p>• මෙම App එක මඟින් මීට පෙර Download කරගත් හෝ Backup එකක් ලෙස ලබාගත් <b>Excel (.xlsx හෝ .xls)</b> ගොනුවක් පමණක් upload කළ යුතුය.</p>`;
  } else if (topic === 'howToDo') {
    box.innerHTML = `<h4 style="color: var(--success); margin-bottom: 8px;"><i class="fa-solid fa-upload"></i> Excel File එකක් Upload කර Restore කරන්නේ කෙසේද?</h4><p>1. Settings වෙත ගොස් <b>'Restore Excel (.xlsx) File'</b> යටතේ ඇති <b>'Choose File'</b> බොත්තම ඔබන්න.</p><p>2. කොළ පාටින් ඇති <b>'Restore Excel Data'</b> බොත්තම ක්ලික් කරන්න.</p>`;
  } else if (topic === 'appFeatures') {
    box.innerHTML = `<h4 style="color: var(--warning); margin-bottom: 8px;"><i class="fa-solid fa-boxes-stacked"></i> Web App එක භාවිතයෙන් කළ හැකි දේවල් මොනවාද?</h4><p>• <b>Stock Tracking & Counting:</b> Normal Counting සහ Daily Counting මඟින් තොග ප්‍රමාණ ගණනය කිරීම.</p>`;
  }
}

function openItemDetails(index) {
  const item = inventory[index];
  if (!item) return;
  item.closing = calculateClosingStock(item);
  const setText = (id, val) => { const el = document.getElementById(id); if(el) el.innerText = val; };
  
  setText('detCode', item.code); setText('detName', item.name); setText('detUom', item.uom);
  setText('detOp', Number(item.op_stock).toLocaleString() + ' ' + item.uom);
  setText('detReceipt', Number(item.f_receipt).toLocaleString() + ' ' + item.uom);
  setText('detIssues', Number(item.g_issues).toLocaleString() + ' ' + item.uom);
  setText('detReturn', Number(item.h_return).toLocaleString() + ' ' + item.uom);
  setText('detSslI', Number(item.i_ssl_received || 0).toLocaleString() + ' ' + item.uom);
  setText('detSslJ', Number(item.j_ssl_sent || 0).toLocaleString() + ' ' + item.uom);
  setText('detRejectionL', Number(item.l_rejection || 0).toLocaleString() + ' ' + item.uom);
  setText('detCounting', Number(item.counting || 0).toLocaleString() + ' ' + item.uom);
  setText('detPacksCount', Number(item.packs_count || 0).toLocaleString());
  setText('detClosing', Number(item.closing).toLocaleString() + ' ' + item.uom);

  showModal('itemDetailModal');
}
function closeItemDetailModal() { hideModal('itemDetailModal'); }

function generateWorkbookWithFormulas() {
  const headers = [ "Type", "Material Code", "Material Name", "UOM", "Op.Stock-Warehouse", "Receipt", "Issues", "Return", "Received to SSL", "Sent to SSL", "Rejection", "Counting", "Packs Count", "Closing Stock" ];
  const sheetData = [headers];

  inventory.forEach((item) => {
    sheetData.push([
      item.type || "RM", item.code, item.name, item.uom, 
      Number(item.op_stock) || 0, Number(item.f_receipt) || 0, Number(item.g_issues) || 0, Number(item.h_return) || 0,
      Number(item.i_ssl_received) || 0, Number(item.j_ssl_sent) || 0, Number(item.l_rejection) || 0,
      Number(item.counting) || 0, Number(item.packs_count) || 0, Number(item.closing) || 0
    ]);
  });

  const worksheet = XLSX.utils.aoa_to_sheet(sheetData); 
  worksheet['!cols'] = [{ wch: 8 }, { wch: 15 }, { wch: 38 }, { wch: 8 }, { wch: 20 }, { wch: 12 }, { wch: 12 }, { wch: 12 }, { wch: 16 }, { wch: 16 }, { wch: 14 }, { wch: 14 }, { wch: 14 }, { wch: 18 }];
  
  const workbook = XLSX.utils.book_new(); 
  XLSX.utils.book_append_sheet(workbook, worksheet, "Stock_Summary");
  return workbook;
}

function getFormattedFileData(format, customName) {
  const today = getTodayStr();
  const workbook = generateWorkbookWithFormulas();
  const fileName = customName || `Stock_Counting_${today}.${format}`;

  if (format === 'xlsx') {
    const buffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    return { blob: new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' }), filename: fileName, mimeType: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' };
  } else if (format === 'csv') {
    const csvContent = XLSX.utils.sheet_to_csv(workbook.Sheets["Stock_Summary"]);
    return { blob: new Blob([csvContent], { type: 'text/csv;charset=utf-8;' }), filename: fileName, mimeType: 'text/csv' };
  } else if (format === 'txt') {
    let txtContent = `STOCK COUNTING REPORT - ${today}\n\n`;
    inventory.forEach((item, idx) => {
      txtContent += `${idx + 1}. [${item.code}] ${item.name}\n   Op Stock: ${item.op_stock} | Receipts: ${item.f_receipt} | Issues: ${item.g_issues}\n   Closing Stock: ${item.closing} ${item.uom}\n--------------------------\n`;
    });
    return { blob: new Blob([txtContent], { type: 'text/plain;charset=utf-8;' }), filename: fileName, mimeType: 'text/plain' };
  }
}

function triggerDirectDownload(blob, filename) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a'); a.style.display = 'none'; a.href = url; a.download = filename;
  document.body.appendChild(a); a.click();
  setTimeout(() => { if (document.body.contains(a)) document.body.removeChild(a); URL.revokeObjectURL(url); }, 1000);
}

async function processExportAction() {
  const t = i18n[currentLang] || i18n['si'];
  const formatSelect = document.getElementById('exportFormatSelect');
  const fileNameInput = document.getElementById('exportFileNameInput');
  const chkShiftStock = document.getElementById('chkShiftStock');
  
  const format = formatSelect ? formatSelect.value : 'xlsx';
  const shouldShift = chkShiftStock ? chkShiftStock.checked : false;

  let customFileName = fileNameInput && fileNameInput.value.trim() !== '' ? fileNameInput.value.trim() : `Stock_Counting_${getTodayStr()}.${format}`;
  if (!customFileName.endsWith(`.${format}`)) customFileName += `.${format}`;

  showLoading("Generating file & exporting...");
  setTimeout(async () => {
    const fileData = getFormattedFileData(format, customFileName);
    closeExportModal();

    if (currentExportMode === 'excel') {
      triggerDirectDownload(fileData.blob, customFileName);
      if (shouldShift) resetStockAndComplete(t); else showToast('File Downloaded Successfully!', 'success');
    } else if (currentExportMode === 'share') {
      const file = new File([fileData.blob], customFileName, { type: fileData.mimeType });
      if (navigator.canShare && navigator.canShare({ files: [file] })) {
        try {
          await navigator.share({ title: t.shareTitle, text: `Report - ${getTodayStr()}`, files: [file] });
          showToast(t.shareSuccess, 'success'); if (shouldShift) resetStockAndComplete(t);
        } catch (err) {
          if (err.name !== 'AbortError') { triggerDirectDownload(fileData.blob, customFileName); showToast('Share failed. Downloaded directly.', 'warning'); if (shouldShift) resetStockAndComplete(t); }
        }
      } else {
        triggerDirectDownload(fileData.blob, customFileName); showToast(t.shareNotSupported, 'warning'); if (shouldShift) resetStockAndComplete(t);
      }
    }
    hideLoading();
  }, 300);
}

async function downloadXLSXBackup() { 
  showLoading("Preparing backup file...");
  setTimeout(() => {
    const defaultName = `Stock_Counting_Backup_${getTodayStr()}.xlsx`;
    const fileData = getFormattedFileData('xlsx', defaultName);
    triggerDirectDownload(fileData.blob, defaultName);
    hideLoading(); showToast('Backup File Downloaded Successfully!', 'success');
  }, 300);
}

function resetStockAndComplete(t) {
  inventory.forEach(item => { 
    item.op_stock = Number(item.closing) || 0; 
    item.f_receipt = 0; item.g_issues = 0; item.h_return = 0; item.i_ssl_received = 0; item.j_ssl_sent = 0; item.l_rejection = 0; 
    item.counting = 0; item.packs_count = 0; item.closing = item.op_stock; item.last_updated = "";
  }); 
  saveInventoryData(); clearSearchInput(); showToast(t.msgExcelShift, 'success'); 
}

function restoreFromXLSX() { 
  const t = i18n[currentLang] || i18n['si'];
  const fileInput = document.getElementById('xlsxFileInput'); 
  if (!fileInput || !fileInput.files[0]) { showToast(t.msgRestoreSelect, 'warning'); return; } 
  
  const file = fileInput.files[0]; showLoading("Restoring Excel data...");
  const reader = new FileReader(); 
  reader.onload = function(e) { 
    try { 
      const data = new Uint8Array(e.target.result); 
      const workbook = XLSX.read(data, { type: 'array' }); 
      const worksheet = workbook.Sheets[workbook.SheetNames[0]]; 
      const matrix = XLSX.utils.sheet_to_json(worksheet, { header: 1, defval: "" }); 
      
      if (!matrix || matrix.length === 0) { hideLoading(); showToast('Error: Excel file is empty!', 'error'); return; } 
      
      let headerIndex = -1; 
      let colMap = { type: -1, code: -1, name: -1, uom: -1, op_stock: -1, f_receipt: -1, g_issues: -1, h_return: -1, i_ssl_received: -1, j_ssl_sent: -1, l_rejection: -1, counting: -1, packs_count: -1, closing: -1 }; 
      
      for (let r = 0; r < Math.min(matrix.length, 10); r++) { 
        const rowStr = matrix[r].map(c => String(c).toLowerCase().trim()); 
        if (rowStr.some(c => c.includes("code") || c.includes("name"))) { 
          headerIndex = r; 
          rowStr.forEach((cellVal, colIdx) => { 
            if (cellVal.includes("type")) colMap.type = colIdx; 
            else if (cellVal.includes("code")) colMap.code = colIdx; 
            else if (cellVal.includes("name")) colMap.name = colIdx; 
            else if (cellVal.includes("uom") || cellVal.includes("unit")) colMap.uom = colIdx; 
            else if (cellVal.includes("op")) colMap.op_stock = colIdx; 
            else if (cellVal.includes("receipt") || cellVal === "f" || cellVal.includes("rec")) colMap.f_receipt = colIdx; 
            else if (cellVal.includes("issue") || cellVal === "g") colMap.g_issues = colIdx; 
            else if (cellVal.includes("return") || cellVal === "h" || cellVal.includes("ret")) colMap.h_return = colIdx; 
            else if (cellVal.includes("received to ssl") || cellVal.includes("rec. ssl") || cellVal === "i") colMap.i_ssl_received = colIdx; 
            else if (cellVal.includes("sent to ssl") || cellVal.includes("sent ssl") || cellVal === "j") colMap.j_ssl_sent = colIdx; 
            else if (cellVal.includes("rejection") || cellVal.includes("reject") || cellVal === "l") colMap.l_rejection = colIdx; 
            else if (cellVal.includes("counting")) colMap.counting = colIdx; 
            else if (cellVal.includes("packs count") || cellVal.includes("packs")) colMap.packs_count = colIdx; 
            else if (cellVal.includes("closing")) colMap.closing = colIdx; 
          }); break; 
        } 
      } 

      if (headerIndex === -1 || colMap.code === -1 || colMap.name === -1) {
        hideLoading(); showToast('Error: Invalid format!', 'error'); return;
      }

      let restored = []; 
      for (let r = headerIndex + 1; r < matrix.length; r++) { 
        const row = matrix[r]; if (!row || row.length === 0) continue; 
        let code = colMap.code !== -1 && row[colMap.code] !== undefined ? String(row[colMap.code]).trim() : ""; 
        let name = colMap.name !== -1 && row[colMap.name] !== undefined ? String(row[colMap.name]).trim() : ""; 

        if (code || name) { 
          let tempItem = {
            op_stock: colMap.op_stock !== -1 ? parseFloat(row[colMap.op_stock]) || 0 : 0,
            f_receipt: colMap.f_receipt !== -1 ? parseFloat(row[colMap.f_receipt]) || 0 : 0,
            g_issues: colMap.g_issues !== -1 ? parseFloat(row[colMap.g_issues]) || 0 : 0,
            h_return: colMap.h_return !== -1 ? parseFloat(row[colMap.h_return]) || 0 : 0,
            i_ssl_received: colMap.i_ssl_received !== -1 ? parseFloat(row[colMap.i_ssl_received]) || 0 : 0,
            j_ssl_sent: colMap.j_ssl_sent !== -1 ? parseFloat(row[colMap.j_ssl_sent]) || 0 : 0,
            l_rejection: colMap.l_rejection !== -1 ? parseFloat(row[colMap.l_rejection]) || 0 : 0
          };
          let closing = calculateClosingStock(tempItem); 
          let counting = colMap.counting !== -1 ? parseFloat(row[colMap.counting]) || 0 : 0; 
          let packs_count = colMap.packs_count !== -1 ? parseFloat(row[colMap.packs_count]) || 0 : 0; 
            
          restored.push({ 
            type: colMap.type !== -1 && row[colMap.type] ? String(row[colMap.type]).trim() : "RM", 
            code, name, 
            uom: colMap.uom !== -1 && row[colMap.uom] ? String(row[colMap.uom]).trim() : "KG", 
            ...tempItem, counting, packs_count, closing, last_updated: getTodayStr() 
          }); 
        } 
      } 
      hideLoading();
      if (restored.length > 0) { 
        inventory = restored; saveInventoryData(); fileInput.value = ""; closeSettings(); showToast(t.msgRestoreSuccess, 'success'); 
      } else { showToast('Error: No data rows found!', 'error'); } 
    } catch (err) { hideLoading(); showToast('Error reading Excel file!', 'error'); } 
  }; 
  reader.readAsArrayBuffer(file); 
} 

function resetToDefault() { 
  const t = i18n[currentLang] || i18n['si'];
  if (confirm(t.msgResetConfirm)) { 
    localStorage.removeItem('rmc_stock_inventory'); 
    initDefaultInventory(); clearSearchInput(); closeSettings(); showToast("Reset Successful!", "success"); 
  } 
} 

document.addEventListener('click', function (e) {
  const target = e.target.closest('.ripple');
  if (target) {
    const rect = target.getBoundingClientRect();
    const circle = document.createElement('span');
    const diameter = Math.max(rect.width, rect.height);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${e.clientX - rect.left - radius}px`;
    circle.style.top = `${e.clientY - rect.top - radius}px`;
    circle.classList.add('ripple-effect');

    const existingRipple = target.querySelector('.ripple-effect');
    if (existingRipple) existingRipple.remove();
    target.appendChild(circle);
    setTimeout(() => circle.remove(), 400);
  }
});

document.addEventListener('DOMContentLoaded', () => {
  loadInventoryData(); applyTheme(currentTheme); applyLanguage(currentLang);
  updateVisibilityState(false); updateClearBtnVisibility(); updateCountingModeBadge(); 

  const searchInput = document.getElementById('searchInput');
  const searchResults = document.getElementById('searchResults');
  const inputAmount = document.getElementById('inputAmount');

  if (searchInput) {
    searchInput.addEventListener('keydown', function(e) {
      if (e.key === 'Enter') {
        e.preventDefault();
        if (searchResults && searchResults.style.display === 'block') {
          const firstItem = searchResults.querySelector('.search-item');
          if (firstItem) firstItem.click();
        }
      }
    });

    searchInput.addEventListener('input', function() { 
      clearTimeout(searchDebounceTimeout);
      const query = this.value.toLowerCase().trim(); 
      updateClearBtnVisibility();
      if (query === '') {
        selectedIndex = -1;
        const selectedBadge = document.getElementById('selectedBadge');
        if (selectedBadge) selectedBadge.style.display = 'none';
        updateVisibilityState(false);
      } else { updateVisibilityState(true); }

      searchDebounceTimeout = setTimeout(() => {
        if (!searchResults) return;
        searchResults.innerHTML = ''; 
        if (!query) { searchResults.style.display = 'none'; return; } 
        
        const filtered = inventory.filter(item => String(item.code).toLowerCase().includes(query) || String(item.name).toLowerCase().includes(query));
        
        if (filtered.length > 0) {
          filtered.slice(0, 15).forEach(item => {
            const div = document.createElement('div');
            div.className = 'search-item';
            div.innerHTML = `<div style="display:flex; flex-direction:column; gap:3px;">
                               <span style="font-weight:700; font-size:0.92rem; color:var(--text-dark);">${item.name}</span>
                               <span style="font-size:0.75rem; font-weight:600; color:var(--text-muted);"><i class="fa-solid fa-barcode"></i> ${item.code}</span>
                             </div>
                             <span style="font-size:0.8rem; font-weight:800; color:var(--primary); background:var(--primary-light); padding:4px 8px; border-radius:8px;">${item.uom}</span>`;
            div.onclick = () => {
              const originalIndex = inventory.findIndex(inv => inv.code === item.code);
              selectItem(originalIndex);
            };
            searchResults.appendChild(div);
          });
          searchResults.style.display = 'block';
        } else {
          const noDiv = document.createElement('div');
          noDiv.className = 'search-item';
          noDiv.style.justifyContent = 'center';
          noDiv.style.color = 'var(--text-muted)';
          noDiv.innerText = 'No items found...';
          searchResults.appendChild(noDiv);
          searchResults.style.display = 'block';
        }
      }, 250);
    });
  }

  if (inputAmount) {
    inputAmount.addEventListener('keydown', function(e) {
      if (e.key === 'Enter') { e.preventDefault(); addSingleSectionData(); }
    });
  }
});
