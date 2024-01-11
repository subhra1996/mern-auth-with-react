// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY ,
  authDomain: "mern-auth-92a5b.firebaseapp.com",
  projectId: "mern-auth-92a5b",
  storageBucket: "mern-auth-92a5b.appspot.com",
  messagingSenderId: "1072761365695",
  appId: "1:1072761365695:web:4dccd3a1ca1a1f8a9f920a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);