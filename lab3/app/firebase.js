import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "piwo-labs-2025.firebaseapp.com",
    projectId: "piwo-labs-2025",
    storageBucket: "piwo-labs-2025.firebasestorage.app",
    messagingSenderId: "933563237080",
    appId: "1:933563237080:web:4390eb66aaf0e585280dad"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();