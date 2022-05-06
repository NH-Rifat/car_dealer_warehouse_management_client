// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBEewsQL858v-nVe5dYvmQpqL1nBFRT2E8",
  authDomain: "car-dealer-407f1.firebaseapp.com",
  projectId: "car-dealer-407f1",
  storageBucket: "car-dealer-407f1.appspot.com",
  messagingSenderId: "291985353914",
  appId: "1:291985353914:web:9965dcc4dececf77dba683"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;