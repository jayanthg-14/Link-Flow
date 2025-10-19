import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBjFDg9J4gzkRAf-rEfymOA0EUDg38PoMs",
  authDomain: "linktree-c58b8.firebaseapp.com",
  projectId: "linktree-c58b8",
  storageBucket: "linktree-c58b8.firebasestorage.app",
  messagingSenderId: "1073087497699",
  appId: "1:1073087497699:web:d982f7c64107e755c84cd6",
  measurementId: "G-LNGTJ9DGRX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
