// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
import {Auth, getAuth, User} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "ai-dm-4fc60.firebaseapp.com",
  projectId: "ai-dm-4fc60",
  storageBucket: "ai-dm-4fc60.appspot.com",
  messagingSenderId: "565076889159",
  appId: "1:565076889159:web:626c13b9e3108f18102b62",
  measurementId: "G-B0WGSKNERW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);