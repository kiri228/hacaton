// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { lstat } from "fs";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzycIRbQcMFs096MP-8lZ1Jvb8weSy_gs",
  authDomain: "glory-896f7.firebaseapp.com",
  projectId: "glory-896f7",
  storageBucket: "glory-896f7.appspot.com",
  messagingSenderId: "798899230369",
  appId: "1:798899230369:web:e82382d90ba382635702e0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
