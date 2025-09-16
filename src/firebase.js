import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA2AoAKLKOzFocTCrCUMq7qxjC7djMe3D4",
  authDomain: "bakweb-e7f75.firebaseapp.com",
  projectId: "bakweb-e7f75",
  storageBucket: "bakweb-e7f75.firebasestorage.app",
  messagingSenderId: "831644016186",
  appId: "1:831644016186:web:9c833f5fe0a8d8d00bdf03",
  measurementId: "G-0Y4DEH3J37"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);