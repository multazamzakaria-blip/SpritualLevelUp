// Firebase Configuration for Naik Level
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-analytics.js";

const firebaseConfig = {
  apiKey: "AIzaSyDuxvufRwadUsGh8-Kakl9KTG5ZGVcIoYQ",
  authDomain: "naik-level-81580.firebaseapp.com",
  projectId: "naik-level-81580",
  storageBucket: "naik-level-81580.firebasestorage.app",
  messagingSenderId: "319872430378",
  appId: "1:319872430378:web:64db1b51b159d27d622e53",
  measurementId: "G-RG7JS79MZ1"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export { app };
