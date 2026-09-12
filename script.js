const i18n = {
  si: {
    lblSearch: '<i class="fa-solid fa-magnifying-glass"></i> Code හෝ Name මගින් සොයන්න:',
    placeholderSearch: 'සොයන්න Code හෝ Name ඇතුලත් කරන්න...',
    lblSection: '<i class="fa-solid fa-layer-group"></i> Section එක තෝරන්න:',
    optReceipt: 'Receipt (ලැබීම්)',
    optIssues: 'Issues (නිකුත් කිරීම්)',
    optReturn: 'Return (නැවත භාරදීම්)',
    optSslI: 'Received to SSL I (SSL I ලැබීම්)',
    optSslJ: 'Sent to SSL J (SSL J යැවීම්)',
    optRejectionL: 'Rejection L (L ප්‍රතික්ෂේප කිරීම්)',
    lblAmount: '<i class="fa-solid fa-calculator"></i> ප්‍රමාණය ඇතුළත් කරන්න:',
    btnSave: '<i class="fa-solid fa-floppy-disk"></i> Save',
    titleExcel: 'Download Excel & Shift Stock',
    titleShare: 'Share Excel File',
    txtSummaryTitle: '<i class="fa-solid fa-list-check" style="color:var(--warning);"></i> තොග පරීක්ෂාව (Stock Check List)',
    placeholderModalSearch: 'චෙක්ලිස්ට් එක සෙවීමට Code හෝ Name ලියන්න...',
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
    msgValidAmount: 'කරුණාකර වලංගු 0 ට වැඩි ප්‍රමාණයක් ඇතුළත් කරන්න!',
    msgAdded: 'සාර්ථකව එකතු විය!',
    msgExcelShift: 'Excel ගොනුව බාගත වූ අතර Stock එක යාවත්කාලීන විය!',
    msgRestoreSelect: 'කරුණාකර Excel File එකක් තෝරන්න!',
    msgRestoreSuccess: 'Excel Restore සාර්ථකයි!',
    msgResetConfirm: 'ඔබට නැවත මුල් දත්ත ලබා ගැනීමට අවශ්‍ය බව විශ්වාසද?',
    shareTitle: 'RMC Daily Stock Summary',
    shareSuccess: 'Excel ගොනුව Share කිරීමට සූදානම්!',
    shareNotSupported: 'ඔබගේ බ්‍රවුසරය File Share කිරීමට සහය නොදක්වයි.'
  },
  en: {
    lblSearch: '<i class="fa-solid fa-magnifying-glass"></i> Search by Name or Code:',
    placeholderSearch: 'Type Code or Name to filter...',
    lblSection: '<i class="fa-solid fa-layer-group"></i> Select Section:',
    optReceipt: 'Receipt',
    optIssues: 'Issues',
    optReturn: 'Return',
    optSslI: 'Received to SSL I',
    optSslJ: 'Sent to SSL J',
    optRejectionL: 'Rejection L',
    lblAmount: '<i class="fa-solid fa-calculator"></i> Enter Amount:',
    btnSave: '<i class="fa-solid fa-floppy-disk"></i> Save',
    titleExcel: 'Download Excel & Shift Stock',
    titleShare: 'Share Excel File',
    txtSummaryTitle: '<i class="fa-solid fa-list-check" style="color:var(--warning);"></i> Stock Check List',
    placeholderModalSearch: 'Quick filter checklist...',
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
    msgValidAmount: 'Please enter a valid amount greater than 0!',
    msgAdded: 'successfully added!',
    msgExcelShift: 'Excel downloaded and Stock shifted successfully!',
    msgRestoreSelect: 'Please select an Excel file!',
    msgRestoreSuccess: 'Excel Restore Successful!',
    msgResetConfirm: 'Are you sure you want to reset to default data?',
    shareTitle: 'RMC Daily Stock Summary',
    shareSuccess: 'Excel file ready to share!',
    shareNotSupported: 'Your browser does not support file sharing.'
  },
  ta: {
    lblSearch: '<i class="fa-solid fa-magnifying-glass"></i> பெயர் அல்லது குறியீடு மூலம் தேடுக:',
    placeholderSearch: 'தேட குறியீடு அல்லது பெயரை தட்டச்சு செய்க...',
    lblSection: '<i class="fa-solid fa-layer-group"></i> பிரிவைத் தேர்ந்தெடுக்கவும்:',
    optReceipt: 'ரசீது (Receipt)',
    optIssues: 'வழங்கல்கள் (Issues)',
    optReturn: 'திரும்பப் பெறுதல் (Return)',
    optSslI: 'Received to SSL I',
    optSslJ: 'Sent to SSL J',
    optRejectionL: 'Rejection L',
    lblAmount: '<i class="fa-solid fa-calculator"></i> அளவை உள்ளிடவும்:',
    btnSave: '<i class="fa-solid fa-floppy-disk"></i> சேமிக்க (Save)',
    titleExcel: 'Download Excel & Shift Stock',
    titleShare: 'Share Excel File',
    txtSummaryTitle: '<i class="fa-solid fa-list-check" style="color:var(--warning);"></i> இருப்பு சரிபார்ப்பு பட்டியல்',
    placeholderModalSearch: 'குறியீடு அல்லது பெயர் மூலம் தேடுக...',
    txtSettingsTitle: '<i class="fa-solid fa-sliders" style="color:var(--primary);"></i> அமைப்புகள் (Settings)',
    lblLanguage: '<i class="fa-solid fa-language" style="color:var(--primary);"></i> மொழியைத் தேர்ந்தெடுக்கவும்:',
    lblTheme: '<i class="fa-solid fa-palette" style="color:var(--warning);"></i> தீம் தேர்ந்தெடுக்கவும்:',
    lblRestore: '<i class="fa-solid fa-file-import" style="color:var(--success);"></i> எக்செல் கோப்பை மீட்டெடுக்க:',
    descRestore: 'முன்பு சேமிக்கப்பட்ட எக்செல் கோப்பைப் பயன்படுத்தித் தரவைப் புதுப்பிக்கவும்.',
    btnRestore: '<i class="fa-solid fa-upload"></i> Restore Excel Data',
    lblBackup: '<i class="fa-solid fa-file-export" style="color:var(--primary);"></i> காப்புப் பிரதி பெற:',
    descBackup: 'தற்போதைய தரவின் பாதுகாப்பான காப்புப் பிரதியைப்ப பெறவும்.',
    btnBackup: '<i class="fa-solid fa-download"></i> Download Backup File',
    lblReset: '<i class="fa-solid fa-rotate-left" style="color:var(--danger);"></i> இயல்புநிலைக்கு மீட்டமைக்க:',
    descReset: 'அனைத்து தரவையும் ஆரம்ப நிலைக்கு மீட்டமைக்கவும்.',
    btnReset: '<i class="fa-solid fa-trash-can"></i> Reset All Data',
    lblFooter: 'Created By <span>Yomal Lakshan</span>',
    msgSelectMaterial: 'தயவுசெய்து ஒரு பொருளைத் தேர்ந்தெடுக்கவும்!',
    msgValidAmount: 'தயவுசெய்து 0 ஐ விட அதிகமான அளவை உள்ளிடவும்!',
    msgAdded: 'வெற்றிகரமாக சேர்க்கப்பட்டது!',
    msgExcelShift: 'எக்செல் பதிவிறக்கம் செய்யப்பட்டது, இருப்பு புதுப்பிக்கப்பட்டது!',
    msgRestoreSelect: 'தயவுசெய்து எக்செல் கோப்பைத் தேர்ந்தெடுக்கவும்!',
    msgRestoreSuccess: 'எக்செல் மீட்டமைப்பு வெற்றிகரமாக முடிந்தது!',
    msgResetConfirm: 'ஆரம்ப தரவுக்கு மீட்டமைக்க நிச்சயமாக விரும்புகிறீர்களா?',
    shareTitle: 'RMC Daily Stock Summary',
    shareSuccess: 'பகிர எக்செல் கோப்பு தயாராக உள்ளது!',
    shareNotSupported: 'உங்கள் உலாவி கோப்பு பகிர்வை ஆதரிக்கவில்லை.'
  }
};

let currentLang = localStorage.getItem('rmc_app_lang') || 'si';
let currentTheme = localStorage.getItem('rmc_app_theme') || 'light';

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
  
  const t = i18n[lang];
  document.getElementById('lblSearch').innerHTML = t.lblSearch;
  document.getElementById('searchInput').placeholder = t.placeholderSearch;
  document.getElementById('lblSection').innerHTML = t.lblSection;
  document.getElementById('optReceipt').innerText = t.optReceipt;
  document.getElementById('optIssues').innerText = t.optIssues;
  document.getElementById('optReturn').innerText = t.optReturn;
  document.getElementById('optSslI').innerText = t.optSslI;
  document.getElementById('optSslJ').innerText = t.optSslJ;
  document.getElementById('optRejectionL').innerText = t.optRejectionL;
  document.getElementById('lblAmount').innerHTML = t.lblAmount;
  document.getElementById('btnSave').innerHTML = t.btnSave;
  document.getElementById('btnExcel').title = t.titleExcel;
  document.getElementById('btnShare').title = t.titleShare;
  document.getElementById('txtSummaryTitle').innerHTML = t.txtSummaryTitle;
  document.getElementById('modalSearchInput').placeholder = t.placeholderModalSearch;
  document.getElementById('txtSettingsTitle').innerHTML = t.txtSettingsTitle;
  document.getElementById('lblLanguage').innerHTML = t.lblLanguage;
  document.getElementById('lblTheme').innerHTML = t.lblTheme;
  document.getElementById('lblRestore').innerHTML = t.lblRestore;
  document.getElementById('descRestore').innerText = t.descRestore;
  document.getElementById('btnRestore').innerHTML = t.btnRestore;
  document.getElementById('lblBackup').innerHTML = t.lblBackup;
  document.getElementById('descBackup').innerText = t.descBackup;
  document.getElementById('btnBackup').innerHTML = t.btnBackup;
  document.getElementById('lblReset').innerHTML = t.lblReset;
  document.getElementById('descReset').innerText = t.descReset;
  document.getElementById('btnReset').innerHTML = t.btnReset;
  document.getElementById('lblFooter').innerHTML = t.lblFooter;
}

function changeLanguage(lang) { applyLanguage(lang); }

applyTheme(currentTheme);
applyLanguage(currentLang);

function showToast(message, type = 'success') { 
  const container = document.getElementById('toastContainer'); 
  const toast = document.createElement('div'); 
  toast.className = `toast toast-${type}`; 
  let iconClass = 'fa-circle-check'; 
  if (type === 'error') iconClass = 'fa-circle-xmark'; 
  if (type === 'warning') iconClass = 'fa-triangle-exclamation'; 
  toast.innerHTML = `<i class="fa-solid ${iconClass}"></i> <span>${message}</span>`; 
  container.appendChild(toast); 
  setTimeout(() => { toast.remove(); }, 3500); 
} 

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

let inventory = []; 

function loadInventoryData() { 
  const savedData = localStorage.getItem('rmc_stock_inventory'); 
  if (savedData) { 
    try { inventory = JSON.parse(savedData); } catch(e) { initDefaultInventory(); } 
  } else { initDefaultInventory(); } 
} 

function initDefaultInventory() { 
  inventory = defaultItems.map(item => ({ 
    ...item, f_receipt: 0, g_issues: 0, h_return: 0, i_ssl_received: 0, j_ssl_sent: 0, l_rejection: 0, closing: item.op_stock, checked: false 
  })); 
  saveInventoryData(); 
} 

function saveInventoryData() { localStorage.setItem('rmc_stock_inventory', JSON.stringify(inventory)); } 

loadInventoryData(); 

let selectedIndex = -1; 
const searchInput = document.getElementById('searchInput'); 
const searchResults = document.getElementById('searchResults'); 
const selectedBadge = document.getElementById('selectedBadge'); 

searchInput.addEventListener('input', function() { 
  const query = this.value.toLowerCase().trim(); 
  searchResults.innerHTML = ''; 
  if (!query) { searchResults.style.display = 'none'; return; } 
  const filtered = inventory.filter(item => 
    String(item.code).toLowerCase().includes(query) || String(item.name).toLowerCase().includes(query) 
  ); 
  if (filtered.length > 0) { 
    searchResults.style.display = 'block'; 
    filtered.forEach(item => { 
      const idx = inventory.findIndex(i => i.code === item.code && i.name === item.name); 
      const div = document.createElement('div'); 
      div.className = 'search-item'; 
      div.innerHTML = `<span><strong>${item.code}</strong> - ${item.name}</span> <span style="color:var(--text-muted); font-size:0.78rem;">${item.op_stock} ${item.uom}</span>`; 
      div.onclick = () => selectItem(idx); 
      searchResults.appendChild(div); 
    }); 
  } else { searchResults.style.display = 'none'; } 
}); 

function selectItem(index) { 
  selectedIndex = index; 
  const item = inventory[index]; 
  searchInput.value = `${item.code} - ${item.name}`; 
  searchResults.style.display = 'none'; 
  document.getElementById('dispCode').innerText = item.code; 
  document.getElementById('dispName').innerText = item.name; 
  document.getElementById('dispUom').innerText = item.uom; 
  document.getElementById('dispOp').innerText = Number(item.op_stock).toLocaleString(); 
  selectedBadge.style.display = 'block'; 
} 

function addSingleSectionData() { 
  const t = i18n[currentLang];
  if (selectedIndex === -1) { showToast(t.msgSelectMaterial, 'warning'); return; } 
  const targetSection = document.getElementById('sectionSelect').value; 
  const amount = parseFloat(document.getElementById('inputAmount').value) || 0; 
  if (amount <= 0) { showToast(t.msgValidAmount, 'error'); return; } 
  let item = inventory[selectedIndex]; 
  
  if (targetSection === 'F') item.f_receipt += amount; 
  else if (targetSection === 'G') item.g_issues += amount; 
  else if (targetSection === 'H') item.h_return += amount; 
  else if (targetSection === 'I') item.i_ssl_received += amount; 
  else if (targetSection === 'J') item.j_ssl_sent += amount; 
  else if (targetSection === 'L') item.l_rejection += amount; 

  item.closing = item.op_stock + item.f_receipt - item.g_issues + item.h_return + item.i_ssl_received - item.j_ssl_sent - item.l_rejection; 
  saveInventoryData(); 
  document.getElementById('inputAmount').value = ''; 
  showToast(`${item.name} [${targetSection}] - ${amount} ${t.msgAdded}`, 'success'); 
} 

function openRecordsModal() { 
  renderChecklist(); 
  const modal = document.getElementById('recordsModal'); 
  modal.style.display = 'flex'; 
  setTimeout(() => modal.classList.add('show'), 10); 
} 

function closeRecordsModal() { 
  const modal = document.getElementById('recordsModal'); 
  modal.classList.remove('show'); 
  setTimeout(() => modal.style.display = 'none', 300); 
} 

function openSettings() { 
  const modal = document.getElementById('settingsModal'); 
  modal.style.display = 'flex'; 
  setTimeout(() => modal.classList.add('show'), 10); 
} 

function closeSettings() { 
  const modal = document.getElementById('settingsModal'); 
  modal.classList.remove('show'); 
  setTimeout(() => modal.style.display = 'none', 300); 
} 

function renderChecklist() { 
  const container = document.getElementById('summaryCardsContainer'); 
  container.innerHTML = ''; 
  inventory.forEach((item, idx) => { 
    const itemDiv = document.createElement('div'); 
    itemDiv.className = 'checklist-item'; 
    
    itemDiv.innerHTML = ` 
      <div class="checklist-left" onclick="openItemDetails(${idx})">
        <input type="checkbox" class="checklist-checkbox" ${item.checked ? 'checked' : ''} onclick="event.stopPropagation(); toggleCheck(${idx}, this)">
        <div class="checklist-info">
          <div class="checklist-name" title="${item.name}">${item.name}</div>
          <div class="checklist-code"><i class="fa-solid fa-barcode"></i> ${item.code}</div>
        </div>
      </div>
      <div class="checklist-right" onclick="openItemDetails(${idx})" style="cursor: pointer;">
        <div class="checklist-stock">${Number(item.closing).toLocaleString()} ${item.uom}</div>
        <div style="font-size: 0.68rem; color: var(--text-muted); font-weight: 600; text-transform: uppercase;">Closing</div>
      </div>
    `; 
    container.appendChild(itemDiv); 
  }); 
} 

function toggleCheck(index, checkbox) {
  inventory[index].checked = checkbox.checked;
  saveInventoryData();
}

function openItemDetails(index) {
  const item = inventory[index];
  document.getElementById('detCode').innerText = item.code;
  document.getElementById('detName').innerText = item.name;
  document.getElementById('detUom').innerText = item.uom;
  document.getElementById('detOp').innerText = Number(item.op_stock).toLocaleString() + ' ' + item.uom;
  document.getElementById('detReceipt').innerText = Number(item.f_receipt).toLocaleString() + ' ' + item.uom;
  document.getElementById('detIssues').innerText = Number(item.g_issues).toLocaleString() + ' ' + item.uom;
  document.getElementById('detReturn').innerText = Number(item.h_return).toLocaleString() + ' ' + item.uom;
  document.getElementById('detSslI').innerText = Number(item.i_ssl_received || 0).toLocaleString() + ' ' + item.uom;
  document.getElementById('detSslJ').innerText = Number(item.j_ssl_sent || 0).toLocaleString() + ' ' + item.uom;
  document.getElementById('detRejectionL').innerText = Number(item.l_rejection || 0).toLocaleString() + ' ' + item.uom;
  document.getElementById('detClosing').innerText = Number(item.closing).toLocaleString() + ' ' + item.uom;

  const modal = document.getElementById('itemDetailModal');
  modal.style.display = 'flex';
  setTimeout(() => modal.classList.add('show'), 10);
}

function closeItemDetailModal() {
  const modal = document.getElementById('itemDetailModal');
  modal.classList.remove('show');
  setTimeout(() => modal.style.display = 'none', 300);
}

document.getElementById('modalSearchInput').addEventListener('input', function() { 
  const q = this.value.toLowerCase().trim(); 
  const items = document.querySelectorAll('#summaryCardsContainer .checklist-item'); 
  items.forEach((itemDiv, idx) => { 
    const item = inventory[idx];
    const text = (item.name + " " + item.code).toLowerCase(); 
    itemDiv.style.display = text.includes(q) ? 'flex' : 'none'; 
  }); 
}); 

function generateWorkbookWithFormulas() {
  const exportData = inventory.map((item, index) => {
    const rowNum = index + 2; 
    return { 
      "Type": item.type, 
      "Material Code": item.code, 
      "Material Name": item.name, 
      "UOM": item.uom, 
      "Op.Stock-Warehouse": item.op_stock, 
      "Receipt": item.f_receipt, 
      "Issues": item.g_issues, 
      "Return": item.h_return, 
      "Received to SSL I": item.i_ssl_received || 0, 
      "Sent to SSL J": item.j_ssl_sent || 0, 
      "Closing Stock": { f: `E${rowNum}+F${rowNum}-G${rowNum}+H${rowNum}+I${rowNum}-J${rowNum}-L${rowNum}`, v: item.closing }, 
      "Rejection L": item.l_rejection || 0 
    }; 
  }); 

  const worksheet = XLSX.utils.json_to_sheet(exportData, { cellFormula: true }); 
  const workbook = XLSX.utils.book_new(); 
  XLSX.utils.book_append_sheet(workbook, worksheet, "Stock_Data");
  return workbook;
}

function downloadExcelAndReset() { 
  const t = i18n[currentLang];
  const workbook = generateWorkbookWithFormulas();
  const today = new Date().toISOString().split('T')[0]; 
  XLSX.writeFile(workbook, `RMC_Daily_Stock_${today}.xlsx`); 

  inventory.forEach(item => { 
    item.op_stock = item.closing; 
    item.f_receipt = 0; 
    item.g_issues = 0; 
    item.h_return = 0; 
    item.i_ssl_received = 0; 
    item.j_ssl_sent = 0; 
    item.l_rejection = 0; 
    item.closing = item.op_stock; 
    item.checked = false;
  }); 
  saveInventoryData(); 
  selectedIndex = -1; searchInput.value = ''; selectedBadge.style.display = 'none'; 
  showToast(t.msgExcelShift, 'success'); 
} 

async function shareStockSummary() {
  const t = i18n[currentLang];
  const today = new Date().toISOString().split('T')[0];
  const workbook = generateWorkbookWithFormulas();
  
  const excelBuffer = XLSX.write(workbook, { bookType: 'xlsx', type: 'array', cellFormula: true });
  const fileName = `RMC_Daily_Stock_${today}.xlsx`;
  const file = new File([excelBuffer], fileName, { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });

  if (navigator.canShare && navigator.canShare({ files: [file] })) {
    try {
      await navigator.share({
        title: t.shareTitle,
        text: `RMC Daily Stock Report - ${today}`,
        files: [file]
      });
      showToast(t.shareSuccess, 'success');
    } catch (err) {
      if (err.name !== 'AbortError') {
        showToast('Sharing cancelled or failed.', 'warning');
      }
    }
  } else {
    XLSX.writeFile(workbook, fileName);
    showToast(t.shareNotSupported, 'warning');
  }
}

function restoreFromXLSX() { 
  const t = i18n[currentLang];
  const fileInput = document.getElementById('xlsxFileInput'); 
  const file = fileInput.files[0]; 
  if (!file) { showToast(t.msgRestoreSelect, 'warning'); return; } 
  
  const reader = new FileReader(); 
  reader.onload = function(e) { 
    try { 
      const data = new Uint8Array(e.target.result); 
      const workbook = XLSX.read(data, { type: 'array' }); 
      const firstSheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[firstSheetName]; 
      const matrix = XLSX.utils.sheet_to_json(worksheet, { header: 1, defval: "" }); 
      
      if (!matrix || matrix.length === 0) { 
        showToast('Excel file is empty!', 'error'); 
        return; 
      } 
      
      let headerIndex = -1; 
      let colMap = { type: 0, code: 1, name: 2, uom: 3, op_stock: 4, f_receipt: 5, g_issues: 6, h_return: 7, i_ssl_received: 8, j_ssl_sent: 9, closing: 10, l_rejection: 11 }; 
      
      for (let r = 0; r < Math.min(matrix.length, 5); r++) { 
        const rowStr = matrix[r].map(c => String(c).toLowerCase().trim()); 
        if (rowStr.some(c => c.includes("code") || c.includes("material") || c.includes("name"))) { 
          headerIndex = r; 
          rowStr.forEach((cellVal, colIdx) => { 
            if (cellVal.includes("type")) colMap.type = colIdx; 
            if (cellVal.includes("code")) colMap.code = colIdx; 
            if (cellVal.includes("name")) colMap.name = colIdx; 
            if (cellVal.includes("uom") || cellVal.includes("unit")) colMap.uom = colIdx; 
            if (cellVal.includes("op") || cellVal.includes("open") || cellVal.includes("stock")) colMap.op_stock = colIdx; 
            if (cellVal.includes("receipt") || cellVal.includes("f")) colMap.f_receipt = colIdx; 
            if (cellVal.includes("issue") || cellVal.includes("g")) colMap.g_issues = colIdx; 
            if (cellVal.includes("return") || cellVal.includes("h")) colMap.h_return = colIdx; 
            if (cellVal.includes("ssl i") || cellVal.includes("received")) colMap.i_ssl_received = colIdx; 
            if (cellVal.includes("ssl j") || cellVal.includes("sent")) colMap.j_ssl_sent = colIdx; 
            if (cellVal.includes("rejection") || cellVal.includes("l")) colMap.l_rejection = colIdx; 
            if (cellVal.includes("closing")) colMap.closing = colIdx; 
          }); 
          break; 
        } 
      } 

      const startIndex = headerIndex !== -1 ? headerIndex + 1 : 1; 
      let restored = []; 

      for (let r = startIndex; r < matrix.length; r++) { 
        const row = matrix[r]; 
        if (!row || row.length === 0) continue; 
        
        let code = row[colMap.code] !== undefined ? String(row[colMap.code]).trim() : ""; 
        let name = row[colMap.name] !== undefined ? String(row[colMap.name]).trim() : ""; 
        
        if (!code && !name && row.length > 2) {
          code = String(row[1] || "").trim();
          name = String(row[2] || "").trim();
        }

        if (code || name) { 
          let type = row[colMap.type] !== undefined && row[colMap.type] !== "" ? String(row[colMap.type]).trim() : "RM"; 
          let uom = row[colMap.uom] !== undefined && row[colMap.uom] !== "" ? String(row[colMap.uom]).trim() : "KG"; 
          let op_stock = parseFloat(row[colMap.op_stock]) || 0; 
          let f_receipt = parseFloat(row[colMap.f_receipt]) || 0; 
          let g_issues = parseFloat(row[colMap.g_issues]) || 0; 
          let h_return = parseFloat(row[colMap.h_return]) || 0; 
          let i_ssl_received = parseFloat(row[colMap.i_ssl_received]) || 0; 
          let j_ssl_sent = parseFloat(row[colMap.j_ssl_sent]) || 0; 
          let l_rejection = parseFloat(row[colMap.l_rejection]) || 0; 
          
          let closingVal = row[colMap.closing]; 
          let closing = (closingVal !== undefined && closingVal !== "" && !isNaN(closingVal)) 
            ? parseFloat(closingVal) 
            : (op_stock + f_receipt - g_issues + h_return + i_ssl_received - j_ssl_sent - l_rejection); 
            
          restored.push({ 
            type, 
            code, 
            name, 
            uom, 
            op_stock, 
            f_receipt, 
            g_issues, 
            h_return, 
            i_ssl_received, 
            j_ssl_sent, 
            l_rejection, 
            closing, 
            checked: false 
          }); 
        } 
      } 

      if (restored.length > 0) { 
        inventory = restored; 
        saveInventoryData(); 
        fileInput.value = ""; 
        closeSettings(); 
        showToast(t.msgRestoreSuccess, 'success'); 
      } else { 
        showToast('No valid data found in Excel file!', 'error'); 
      } 
    } catch (err) { 
      console.error(err);
      showToast('Error reading Excel file!', 'error'); 
    } 
  }; 
  reader.readAsArrayBuffer(file); 
} 

function resetToDefault() { 
  const t = i18n[currentLang];
  if (confirm(t.msgResetConfirm)) { 
    localStorage.removeItem('rmc_stock_inventory'); 
    initDefaultInventory(); 
    closeSettings(); 
    showToast("Reset Successful!", "success"); 
  } 
} 

function downloadXLSXBackup() { 
  const workbook = generateWorkbookWithFormulas();
  const today = new Date().toISOString().split('T')[0]; 
  XLSX.writeFile(workbook, `RMC_Stock_Backup_${today}.xlsx`); 
  showToast('Backup File Downloaded!', 'success'); 
}
