// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'

// TODO: Add SDKs for Fi frrebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDg5hZn_JSKLwEwVhPJl9IUToRPKKw7AnI",
  authDomain: "academia-9.firebaseapp.com",
  projectId: "academia-9",
  storageBucket: "academia-9.appspot.com",
  messagingSenderId: "300727291746",
  appId: "1:300727291746:web:75a6548ea729a71236a63b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const google = new GoogleAuthProvider()
const baseDato = getFirestore()

export {
  app, 
  google, 
  baseDato
}