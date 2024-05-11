// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAm9_eAQHeKaQ2y04YZs-ip45XtguCxqBE",
  authDomain: "crud-3812a.firebaseapp.com",
  projectId: "crud-3812a",
  storageBucket: "crud-3812a.appspot.com",
  messagingSenderId: "622182850595",
  appId: "1:622182850595:web:f446c06c30e3d1ac99d196",
  measurementId: "G-067S6YEP6W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
