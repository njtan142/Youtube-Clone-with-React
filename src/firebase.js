// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwRdhcy_mZJjDdAJNsBxgg1O4O0s0-_xs",
  authDomain: "clone-f3d42.firebaseapp.com",
  projectId: "clone-f3d42",
  storageBucket: "clone-f3d42.appspot.com",
  messagingSenderId: "881884933972",
  appId: "1:881884933972:web:240b66eab37a089a8822c1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = firebase.auth();
const firestore = firebase.firestore();

export {app, auth, firestore};