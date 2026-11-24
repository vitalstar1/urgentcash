// Import Firebase core
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-app.js";

// Import Firebase Authentication
import { getAuth } from "https://www.gstatic.com/firebasejs/12.0.0/firebase-auth.js";

// Your Urgent Cash Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2LtEPKS6jU3nIsAj-KV3MoxmUULj_5a8",
  authDomain: "urgent-cash-76162.firebaseapp.com",
  projectId: "urgent-cash-76162",
  storageBucket: "urgent-cash-76162.firebasestorage.app",
  messagingSenderId: "1000483783652",
  appId: "1:1000483783652",
  measurementId: "G-PN610M8757"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Authentication
const auth = getAuth(app);

// Export for other files to use
export { app, auth };