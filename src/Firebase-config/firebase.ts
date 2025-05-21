// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from "firebase/auth";

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8SLbozrusKaE9BhgKdWg9QF0W-MUhbqM",
  authDomain: "mamaput-51928.firebaseapp.com",
  projectId: "mamaput-51928",
  storageBucket: "mamaput-51928.firebasestorage.app",
  messagingSenderId: "539339959853",
  appId: "1:539339959853:web:f8af55b797894d65ef12a4",
  measurementId: "G-38HMKHZ2P9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider();