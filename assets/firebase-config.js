// ================================
// 🔥 FIREBASE KONFIGURASI NAIK LEVEL
// ================================

import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-firestore.js";

// ⚙️ Data konfigurasi proyek Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDuxvufRwadUsGh8-Kakl9KTG5ZGVcIoYQ",
  authDomain: "naik-level-81580.firebaseapp.com",
  projectId: "naik-level-81580",
  storageBucket: "naik-level-81580.firebasestorage.app",
  messagingSenderId: "319872430378",
  appId: "1:319872430378:web:64db1b51b159d27d622e53",
  measurementId: "G-RG7JS79MZ1"
};

// 🔧 Inisialisasi Firebase App & Firestore Database
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
