// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import 'firebase/auth'
import 'firebase/firebase-firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4-6dW-rkdTbjFElhRqkH6f3-iSd8tigw",
  authDomain: "olx-clone-e99a9.firebaseapp.com",
  projectId: "olx-clone-e99a9",
  storageBucket: "olx-clone-e99a9.appspot.com",
  messagingSenderId: "232835858253",
  appId: "1:232835858253:web:57449f7ac58ad8c8444104"
};

// Initialize Firebase
export default firebase.initializeApp(firebaseConfig)