"use strict";

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

let binCardData = [];
let filteredData = [];
const PAGE_SIZE = 50;
let currentPage = 1;
let confirmCallback = null;
let showDetailedStats = false;
let currentFileId = null;
const CLOUD_SYNC_ID = 888888; 

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

function processAndDisplayItems(rawItems, filename) {
    binCardData = [];
    
    rawItems.forEach(item => {
        const op = parseNum(item.openingStock);
        const rec = parseNum(item.receipt);
        const iss = parseNum(item.issues);
        const ret = parseNum(item.returnQty);
        
        // නිවැරදි සමීකරණය: Closing = Opening + Receipts - Issues + Returns
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
