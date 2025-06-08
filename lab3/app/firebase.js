import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyA1i5ncUQr33R8MHA_o7drt3N1XXMyulbE",
    authDomain: "piwo-labs-2025.firebaseapp.com",
    projectId: "piwo-labs-2025",
    storageBucket: "piwo-labs-2025.firebasestorage.app",
    messagingSenderId: "933563237080",
    appId: "1:933563237080:web:4bac6851e80601f1280dad"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);