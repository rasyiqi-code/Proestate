// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfYCx89f6YLr9m3ZzXCSZ-c_tsJncN5R8",
  authDomain: "proestate-504a1.firebaseapp.com",
  projectId: "proestate-504a1",
  storageBucket: "proestate-504a1.firebasestorage.app",
  messagingSenderId: "281478313891",
  appId: "1:281478313891:web:ccaab8da93b6b276b68c16",
  measurementId: "G-TBT2HJ046D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
