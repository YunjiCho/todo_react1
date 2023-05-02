import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAFhgepx75yqZFqtGuU4skPmC69sjH4S24",
  authDomain: "todo-ba1a9.firebaseapp.com",
  projectId: "todo-ba1a9",
  storageBucket: "todo-ba1a9.appspot.com",
  messagingSenderId: "437885802483",
  appId: "1:437885802483:web:8315497e70ec8931566486",
  measurementId: "G-TTH9RZLZ0B",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { auth, db };
