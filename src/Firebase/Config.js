import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBOU2IodaouwFGqSxOOAod-Kat2fzReCnY",
  authDomain: "olx-clone-300cd.firebaseapp.com",
  projectId: "olx-clone-300cd",
  storageBucket: "olx-clone-300cd.appspot.com",
  messagingSenderId: "74331826773",
  appId: "1:74331826773:web:493f1a877dda0543e5c2dc",
  measurementId: "G-3FCTQC5EYM"
};


export default firebase.initializeApp(firebaseConfig)

