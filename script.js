let currentLang = 'si';
let currentTheme = 'light';
let inventory = []; 
let selectedIndex = -1;
let currentlyEditingIndex = -1;
let swipeStartX = 0;
let isSwiping = false;

const defaultItems = [ 
  // Added section_k, counting_kg, counting_pieces, full_details
  {type: "RM", code: "11067431", name: "SALT - FLOW", uom: "KG", op_stock: 11000, receipt: 0, issues: 0, return: 0, section_k: 0, ssl_i: 0, ssl_j: 0, rejection_l: 0, counting: 0, counting_kg: 0, counting_pieces: 0, packs_count: 0, full_details: null}, 
  {type: "RM", code: "11061702", name: "WHITE SUGAR", uom: "KG", op_stock: 2500, receipt: 0, issues: 0, return: 0, section_k: 0, ssl_i: 0, ssl_j: 0, rejection_l: 0, counting: 0, counting_kg: 0, counting_pieces: 0, packs_count: 0, full_details: null}
  // Add rest of default array here...
]; 

document.addEventListener('DOMContentLoaded', () => {
  loadInventoryData();
  setupEventListeners();
  updateCountingModeBadge(); // Triggers UI adjustments
});

function loadInventoryData() {
  const saved = localStorage.getItem('rmc_inventory_data');
  if (saved) {
    try {
      inventory = JSON.parse(saved);
      // Ensure new properties exist
      inventory = inventory.map(item => ({
        ...item,
        section_k: item.section_k || 0,
        counting_kg: item.counting_kg || 0,
        counting_pieces: item.counting_pieces || 0,
        full_details: item.full_details || null
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
    searchInput.addEventListener('input', (e) => handleSearch(e.target.value.trim()));
  }
  const binCardSearch = document.getElementById('binCardSearchInput');
  if (binCardSearch) {
    binCardSearch.addEventListener('input', renderBinCardUpdateViewList);
  }
  const todayModalSearch = document.getElementById('todayModalSearchInput');
  if (todayModalSearch) {
    todayModalSearch.addEventListener('input', renderTodayUploadedList);
  }
}

// Global Swipe Handlers for Edit Action
window.handleSwipeStart = function(e) {
  isSwiping = true;
  swipeStartX = e.type.includes('mouse') ? e.pageX : e.touches[0].clientX;
};

window.handleSwipeMove = function(e) {
  if (!isSwiping) return;
  const currentX = e.type.includes('mouse') ? e.pageX : e.touches[0].clientX;
  const diff = currentX - swipeStartX;
  if(diff > 0 && diff < 150) {
      e.currentTarget.querySelector('.swipe-content').style.transform = `translateX(${diff}px)`;
  }
};

window.handleSwipeEnd = function(e, index) {
  if (!isSwiping) return;
  isSwiping = false;
  const content = e.currentTarget.querySelector('.swipe-content');
  const currentX = e.type.includes('mouse') ? e.pageX : (e.changedTouches ? e.changedTouches[0].clientX : swipeStartX);
  const diff = currentX - swipeStartX;
  
  content.style.transform = `translateX(0px)`;
  
  if (diff > 80) {
    openEditCountingModal(index);
  }
};

function handleSearch(query) {
  const resultsBox = document.getElementById('searchResults');
  if (!query) { resultsBox.style.display = 'none'; return; }

  const lowerQuery = query.toLowerCase();
  const matched = inventory.filter(i => i.code.toLowerCase().includes(lowerQuery) || i.name.toLowerCase().includes(lowerQuery));

  if (matched.length === 0) {
    resultsBox.innerHTML = `<div class="search-item">No matches</div>`;
  } else {
    resultsBox.innerHTML = matched.map(item => {
      const idx = inventory.findIndex(i => i.code === item.code);
      return `<div class="search-item" onclick="selectMaterialByIndex(${idx})"><strong>${item.code}</strong> - ${item.name}</div>`;
    }).join('');
  }
  resultsBox.style.display = 'block';
}

function selectMaterialByIndex(index) {
  selectedIndex = index;
  const item = inventory[index];
  document.getElementById('searchInput').value = `${item.code} - ${item.name}`;
  document.getElementById('searchResults').style.display = 'none';

  document.getElementById('dispCode').innerText = item.code;
  document.getElementById('dispName').innerText = item.name;
  document.getElementById('dispUom').innerText = item.uom;
  document.getElementById('dispClosing').innerText = calculateClosingStock(item);
  document.getElementById('selectedBadge').style.display = 'block';
  document.getElementById('inputAmount').focus();
}

function calculateClosingStock(item) {
  const op = Number(item.op_stock) || 0;
  const f = Number(item.receipt) || 0;
  const g = Number(item.issues) || 0;
  const h = Number(item.return) || 0;
  const i = Number(item.ssl_i) || 0;
  const j = Number(item.ssl_j) || 0;
  const l = Number(item.rejection_l) || 0;
  const k = Number(item.section_k) || 0; // K is treated as adjustment if needed
  return (op + f + h + i + k) - (g + j + l);
}

function updateCountingModeBadge() {
  const section = document.getElementById('sectionSelect').value;
  const badge = document.getElementById('countingModeBadge');
  const btnBinCard = document.getElementById('btnBinCardView');
  
  if (section === 'COUNTING') {
    badge.innerText = 'Counting Mode';
    btnBinCard.style.display = 'none'; // Hide when in Counting
  } else {
    badge.innerText = 'Daily Stock Mode';
    btnBinCard.style.display = 'flex'; // Show only in Daily Stock
  }
}

function addSingleSectionData() {
  if (selectedIndex < 0) return alert("Select an item first!");
  const val = parseFloat(document.getElementById('inputAmount').value) || 0;
  if (val <= 0) return alert("Enter valid amount!");

  const section = document.getElementById('sectionSelect').value;
  const item = inventory[selectedIndex];

  if (section === 'F') item.receipt += val;
  else if (section === 'G') item.issues += val;
  else if (section === 'H') item.return += val;
  else if (section === 'K') item.section_k += val;
  else if (section === 'I') item.ssl_i += val;
  else if (section === 'J') item.ssl_j += val;
  else if (section === 'L') item.rejection_l += val;
  else if (section === 'COUNTING') item.counting = val;

  saveInventoryData();
  document.getElementById('inputAmount').value = '';
  document.getElementById('dispClosing').innerText = calculateClosingStock(item);
  alert("Saved Successfully!");
}

// ---------------- BIN CARD VIEW (NEW BEAUTIFUL UI) ----------------
function openBinCardUpdateView() {
  document.getElementById('binCardUpdateModal').classList.add('show');
  renderBinCardUpdateViewList();
}
function closeBinCardUpdateView() {
  document.getElementById('binCardUpdateModal').classList.remove('show');
}

function renderBinCardUpdateViewList() {
  const container = document.getElementById('binCardCardsContainer');
  const filter = document.getElementById('binCardSearchInput').value.toLowerCase().trim();

  // Show ONLY if F, G, H, or K has data
  const filtered = inventory.filter(item => {
    const hasData = (item.receipt > 0 || item.issues > 0 || item.return > 0 || item.section_k > 0);
    if (!hasData) return false;
    if (!filter) return true;
    return item.code.toLowerCase().includes(filter) || item.name.toLowerCase().includes(filter);
  });

  if (filtered.length === 0) {
    container.innerHTML = `<p style="text-align:center; padding:20px;">F, G, H, K සඳහා යාවත්කාලීන වූ දත්ත නොමැත.</p>`;
    return;
  }

  container.innerHTML = filtered.map(item => {
    let sectionsHtml = '';
    if (item.receipt > 0) sectionsHtml += `<div class="bc-badge f-sec"><span>F (Receipt)</span><span class="bc-val f-val">${item.receipt}</span></div>`;
    if (item.issues > 0) sectionsHtml += `<div class="bc-badge g-sec"><span>G (Issues)</span><span class="bc-val g-val">${item.issues}</span></div>`;
    if (item.return > 0) sectionsHtml += `<div class="bc-badge h-sec"><span>H (Return)</span><span class="bc-val h-val">${item.return}</span></div>`;
    if (item.section_k > 0) sectionsHtml += `<div class="bc-badge k-sec"><span>K (Section)</span><span class="bc-val k-val">${item.section_k}</span></div>`;

    return `
      <div class="bincard-modern">
        <div class="bc-header">
          <span class="bc-code"><i class="fa-solid fa-barcode"></i> ${item.code}</span>
          <span class="bc-name">${item.name}</span>
        </div>
        <div class="bc-sec-grid">
          ${sectionsHtml}
        </div>
      </div>
    `;
  }).join('');
}

function downloadBinCardData() {
  const filtered = inventory.filter(item => item.receipt > 0 || item.issues > 0 || item.return > 0 || item.section_k > 0);
  if(filtered.length === 0) return alert("No Bin Card data to download!");

  const dataToExport = filtered.map(item => {
    let obj = { "Material Code": item.code, "Material Name": item.name };
    if (item.receipt > 0) obj["F (Receipt)"] = item.receipt;
    if (item.issues > 0) obj["G (Issues)"] = item.issues;
    if (item.return > 0) obj["H (Return)"] = item.return;
    if (item.section_k > 0) obj["K (Section)"] = item.section_k;
    return obj;
  });

  const ws = XLSX.utils.json_to_sheet(dataToExport);
  const wb = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(wb, ws, "Bin Card Update");
  XLSX.writeFile(wb, `Bin_Card_Update_${new Date().toISOString().slice(0,10)}.xlsx`);
}

// ---------------- UPDATED LIVE & SWIPE ----------------
function openTodayUploadedModal() {
  document.getElementById('todayUploadedModal').classList.add('show');
  renderTodayUploadedList();
}
function closeTodayUploadedModal() {
  document.getElementById('todayUploadedModal').classList.remove('show');
}

function renderTodayUploadedList() {
  const container = document.getElementById('todayCardsContainer');
  const filter = document.getElementById('todayModalSearchInput').value.toLowerCase().trim();
  const countingOnly = document.getElementById('toggleCountingOnly').checked;

  const filtered = inventory.filter(item => {
    // If Switch ON -> Show Items with Counting Data
    if (countingOnly) {
      if (item.counting <= 0 && item.counting_kg <= 0 && item.counting_pieces <= 0) return false;
    } 
    // If Switch OFF -> Show Items that are in Bin Card View (F, G, H, K active) to show Closing Stock
    else {
      if (!(item.receipt > 0 || item.issues > 0 || item.return > 0 || item.section_k > 0)) return false;
    }

    if (!filter) return true;
    return item.code.toLowerCase().includes(filter) || item.name.toLowerCase().includes(filter);
  });

  if (filtered.length === 0) {
    container.innerHTML = `<p style="text-align:center; padding:20px;">දත්ත කිසිවක් හමු නොවීය.</p>`;
    return;
  }

  container.innerHTML = filtered.map(item => {
    const originalIndex = inventory.findIndex(i => i.code === item.code);
    
    // Details Display Logic based on Switch
    let rightSideDetails = '';
    if (countingOnly) {
      rightSideDetails = `
        <div style="font-size: 1.1rem; font-weight: 800; color: var(--primary);">Amt: ${item.counting}</div>
        <div style="font-size: 0.8rem; color: var(--text-muted);">KG: ${item.counting_kg} | Pieces: ${item.counting_pieces}</div>
      `;
    } else {
      rightSideDetails = `
        <div style="font-size: 0.8rem; color: var(--text-muted); margin-bottom:2px;">Closing Stock</div>
        <div style="font-size: 1.2rem; font-weight: 800; color: var(--success);">${calculateClosingStock(item)} ${item.uom}</div>
      `;
    }

    // Adding Swipe Wrapper for Edit Trigger
    return `
      <div class="swipeable-wrapper" 
           onmousedown="handleSwipeStart(event)" 
           onmousemove="handleSwipeMove(event)"
           onmouseup="handleSwipeEnd(event, ${originalIndex})"
           onmouseleave="handleSwipeEnd(event, ${originalIndex})"
           ontouchstart="handleSwipeStart(event)" 
           ontouchmove="handleSwipeMove(event)" 
           ontouchend="handleSwipeEnd(event, ${originalIndex})">
        
        <div class="swipe-bg-action"><i class="fa-solid fa-pen"></i> &nbsp; Edit</div>
        
        <div class="swipe-content">
          <div class="checklist-info">
            <span class="checklist-name">${item.name}</span>
            <span class="checklist-code">${item.code}</span>
          </div>
          <div style="text-align:right;">
             ${rightSideDetails}
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// ---------------- EDIT COUNTING DETAILS ----------------
function openEditCountingModal(index) {
  currentlyEditingIndex = index;
  const item = inventory[index];
  document.getElementById('editModalItemName').innerText = item.name;
  document.getElementById('editModalItemCode').innerText = `Code: ${item.code}`;
  
  document.getElementById('editCountingAmountInput').value = item.counting || '';
  document.getElementById('editKgInput').value = item.counting_kg || '';
  document.getElementById('editPiecesInput').value = item.counting_pieces || '';
  
  document.getElementById('editCountingModal').classList.add('show');
}
function closeEditCountingModal() {
  document.getElementById('editCountingModal').classList.remove('show');
}
function saveEditedCountingAmount() {
  if (currentlyEditingIndex < 0) return;
  const amt = parseFloat(document.getElementById('editCountingAmountInput').value) || 0;
  const kg = parseFloat(document.getElementById('editKgInput').value) || 0;
  const pcs = parseFloat(document.getElementById('editPiecesInput').value) || 0;

  inventory[currentlyEditingIndex].counting = amt;
  inventory[currentlyEditingIndex].counting_kg = kg;
  inventory[currentlyEditingIndex].counting_pieces = pcs;
  
  saveInventoryData();
  closeEditCountingModal();
  renderTodayUploadedList();
  alert("Data updated successfully!");
}

// ---------------- FULL DATA EXCEL RESTORE ----------------
function openSettings() { document.getElementById('settingsModal').classList.add('show'); }
function closeSettings() { document.getElementById('settingsModal').classList.remove('show'); }

function restoreFromXLSX() {
  const fileInput = document.getElementById('xlsxFileInput');
  if (!fileInput.files.length) return alert("Please select an Excel file!");

  const file = fileInput.files[0];
  const reader = new FileReader();
  
  reader.onload = function(e) {
    try {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: 'array' });
      const worksheet = workbook.Sheets[workbook.SheetNames[0]];
      const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

      const headers = jsonData[0].map(h => String(h).trim()); // Store exact headers
      
      let codeIdx = headers.findIndex(h => h.toLowerCase().includes('code'));
      if(codeIdx === -1) codeIdx = 0;

      for (let i = 1; i < jsonData.length; i++) {
        const row = jsonData[i];
        if (!row || !row[codeIdx]) continue;
        const code = String(row[codeIdx]).trim();

        // 1. Save Full Row Data Object
        let fullRowData = {};
        headers.forEach((h, idx) => { fullRowData[h] = row[idx]; });

        // 2. Identify Standard Values
        let existing = inventory.find(item => item.code === code);
        if (existing) {
          existing.full_details = fullRowData; // Safely attached all details!
          // You can also map specific columns here if required like op_stock
        } else {
          // If totally new item
          inventory.push({
            type: "RM", code: code, 
            name: row[1] || "Unknown", uom: row[2] || "KG", op_stock: row[3] || 0,
            receipt: 0, issues: 0, return: 0, section_k: 0, ssl_i: 0, ssl_j: 0, rejection_l: 0, 
            counting: 0, counting_kg: 0, counting_pieces: 0,
            full_details: fullRowData // Whole backup kept here
          });
        }
      }
      saveInventoryData();
      alert("Excel Restore & Full Data Backup Successful!");
      closeSettings();
    } catch (err) {
      alert("Error reading excel file!");
    }
  };
  reader.readAsArrayBuffer(file);
}
