
import { initializeApp } from "firebase/app";
// FIX: Changed to a namespace import to address potential module resolution issues.
import * as firebaseAuth from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDfYCx89f6YLr9m3ZzXCSZ-c_tsJncN5R8",
  authDomain: "proestate-504a1.firebaseapp.com",
  projectId: "proestate-504a1",
  storageBucket: "proestate-504a1.appspot.com",
  messagingSenderId: "281478313891",
  appId: "1:281478313891:web:ccaab8da93b6b276b68c16",
  measurementId: "G-TBT2HJ046D"
};

const app = initializeApp(firebaseConfig);
// FIX: Using getAuth from the namespace import.
export const auth = firebaseAuth.getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);