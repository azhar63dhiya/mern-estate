// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-36d15.firebaseapp.com",
  projectId: "mern-estate-36d15",
  storageBucket: "mern-estate-36d15.appspot.com",
  messagingSenderId: "963208619442",
  appId: "1:963208619442:web:cfda9e41677e0d7bcd70ab"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);