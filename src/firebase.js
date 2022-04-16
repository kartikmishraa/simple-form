// import firebase from "firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDZg4pA9PYjJ5xjI2TyTzAVC-Ak5BqETu0",
  authDomain: "simple-form-e892e.firebaseapp.com",
  projectId: "simple-form-e892e",
  storageBucket: "simple-form-e892e.appspot.com",
  messagingSenderId: "86352746746",
  appId: "1:86352746746:web:1c4ba89c6e46802531d143",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export default db;
