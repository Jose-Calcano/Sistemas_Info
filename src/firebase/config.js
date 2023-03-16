
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"


const firebaseConfig = {
    apiKey: "AIzaSyB0OuXAlqFHs6-Ucfy1cQLqIt8eiFU42ZI",
    authDomain: "sist-info2023.firebaseapp.com",
    databaseURL: "https://sist-info2023-default-rtdb.firebaseio.com",
    projectId: "sist-info2023",
    storageBucket: "sist-info2023.appspot.com",
    messagingSenderId: "936011887572",
    appId: "1:936011887572:web:47f691f525b28c2a195c41",
    measurementId: "G-DWW9BS8E7F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app)
export const db = getFirestore(app)
export const store = getStorage(app)

export const GoogleProvider = new GoogleAuthProvider()
GoogleProvider.setCustomParameters({prompt:"select_account"})