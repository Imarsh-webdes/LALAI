// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-auth.js";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBXDpH4SYFPXFSZPlNZK7-I2s74ENWFIgY",
  authDomain: "login-870f5.firebaseapp.com",
  projectId: "login-870f5",
  storageBucket: "login-870f5.firebasestorage.app",
  messagingSenderId: "491482444029",
  appId: "1:491482444029:web:ffcddac75c4ec44a73ce94",
  measurementId: "G-VDLYG9240M"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);