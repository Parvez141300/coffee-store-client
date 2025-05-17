// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4gtgFmkDaEgaA3Uv6D6cH-4J4cvg1NQM",
  authDomain: "coffee-store-app-c8187.firebaseapp.com",
  projectId: "coffee-store-app-c8187",
  storageBucket: "coffee-store-app-c8187.firebasestorage.app",
  messagingSenderId: "387558446837",
  appId: "1:387558446837:web:21f8fe991d550958d117bc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);