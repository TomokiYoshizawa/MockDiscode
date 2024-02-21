// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCWammR-OI1sMNPlREHj5MGA_xpzc3CbVc",
  authDomain: "discord-clone-409d5.firebaseapp.com",
  projectId: "discord-clone-409d5",
  storageBucket: "discord-clone-409d5.appspot.com",
  messagingSenderId: "803830042017",
  appId: "1:803830042017:web:ad75a809e73d60cd7fcfe0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, db };
