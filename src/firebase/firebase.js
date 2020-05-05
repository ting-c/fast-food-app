import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyC0e6jcqhLDUGCssPrRqS4xk46W_RP0TK0",
    authDomain: "fast-food-app-904e7.firebaseapp.com",
    databaseURL: "https://fast-food-app-904e7.firebaseio.com",
    projectId: "fast-food-app-904e7",
    storageBucket: "fast-food-app-904e7.appspot.com",
    messagingSenderId: "988292210440",
    appId: "1:988292210440:web:53c159818f765f2bc596bd",
    measurementId: "G-667FZN8ZH6"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const provider = new firebase.auth.GoogleAuthProvider(); 