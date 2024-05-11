// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBreY4QvlEsA6Kq0XFVdeIIe_fW5qkxpGE",
  authDomain: "login-application-96f09.firebaseapp.com",
  projectId: "login-application-96f09",
  storageBucket: "login-application-96f09.appspot.com",
  messagingSenderId: "931161697125",
  appId: "1:931161697125:web:45205ef667b10ebb2c0f8c",
  measurementId: "G-QBBX45Z66D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
