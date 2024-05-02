// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBAR_CDWPpNLBTM7o1WlDrQ_PhxLLSeVNo",
  authDomain: "react-auth-c2d65.firebaseapp.com",
  projectId: "react-auth-c2d65",
  storageBucket: "react-auth-c2d65.appspot.com",
  messagingSenderId: "844984848996",
  appId: "1:844984848996:web:b526f0ed66691f4aa90571"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);