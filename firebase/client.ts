// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDYSP2Egvp-v_5geMSq1YrBx_ET2IOYo9g",
  authDomain: "iain-interviewprep.firebaseapp.com",
  projectId: "iain-interviewprep",
  storageBucket: "iain-interviewprep.firebasestorage.app",
  messagingSenderId: "932860486011",
  appId: "1:932860486011:web:05aeb3244777969e03ddde",
  measurementId: "G-HC3BC6HSQ7",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
