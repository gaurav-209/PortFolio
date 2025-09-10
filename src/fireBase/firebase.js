// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // ✅ ADD THIS LINE
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBzE4WD7FARygu_Epbsyv4PjhWbu0XYxYQ",
  authDomain: "trackmycash-edfaa.firebaseapp.com",
  projectId: "trackmycash-edfaa",
  storageBucket: "trackmycash-edfaa.firebasestorage.app",
  messagingSenderId: "92740182508",
  appId: "1:92740182508:web:c0b0f3508dccfeab7620c9",
  measurementId: "G-6YEZH47B58"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);