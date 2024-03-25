// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCwO3fZwEgcAY8duJfmd4ZBJMzXJ-3r7NU",
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