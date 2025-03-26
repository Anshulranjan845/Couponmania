// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDdFcMquhx5U5yC02IF7EkXUHrLT3jMbis",
  authDomain: "ecommerce-coupan.firebaseapp.com",
  projectId: "ecommerce-coupan",
  storageBucket: "ecommerce-coupan.firebasestorage.app",
  messagingSenderId: "464065240195",
  appId: "1:464065240195:web:cae46ab14cf5313fcc4fb6",
  measurementId: "G-J1M20KFJ9T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);