// src/firebase.ts
import { initializeApp } from "firebase/app";
import { 
  getAuth, 
  GoogleAuthProvider, 
  signInWithPopup, 
  signOut, 
  User, 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "firebase/auth";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAU-kIGw-_T1tBIAEmqrnQg1oyflCF2XFw",
  authDomain: "test-43070.firebaseapp.com",
  projectId: "test-43070",
  storageBucket: "test-43070.appspot.com", // Fixed storage bucket URL
  messagingSenderId: "632659964427",
  appId: "1:632659964427:web:8a6b146a35c836ef3e0d0e",
  measurementId: "G-QGQWT3P438"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Authentication setup
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Google Sign-In
export const signInWithGoogle = async (): Promise<User | null> => {
  try {
    const result = await signInWithPopup(auth, provider);
    return result.user;
  } catch (error) {
    console.error("Error during Google sign in:", error);
    return null;
  }
};



// Email and Password Sign-In
export const signInWithEmail = async (email: string, password: string): Promise<User | null> => {
  try {
    const result = await signInWithEmailAndPassword(auth, email, password);
    return result.user;
  } catch (error) {
    console.error("Error during sign in:", error);
    return null;
  }
};

// Sign Out
export const logOut = async (): Promise<void> => {
  try {
    await signOut(auth);
    console.log("User signed out");
  } catch (error) {
    console.error("Error during sign out:", error);
  }
};

export { auth, provider };
