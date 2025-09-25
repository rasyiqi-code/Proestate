// FIX: Import firebase from compat libraries to use it as a module, as `window.firebase` is not available in a modular setup.
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

// IMPORTANT: Replace the placeholder values below with your own Firebase project's configuration.
// You can find this in your Firebase project settings.
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Initialize Firebase
// FIX: Replace `window.firebase` with the imported `firebase` module to resolve errors on lines 13 and 14.
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// FIX: Replace `window.firebase` with the imported `firebase` module to resolve error on line 17.
export const auth = firebase.auth();