// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAaGbVwLnMLRz7BYC0WBaxclTmxugStuFM",
  authDomain: "todo-list-7e9fe.firebaseapp.com",
  projectId: "todo-list-7e9fe",
  storageBucket: "todo-list-7e9fe.appspot.com",
  messagingSenderId: "592482704678",
  appId: "1:592482704678:web:f995dce93ddea1ebc7b5e7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);