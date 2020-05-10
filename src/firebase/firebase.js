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
const provider = new firebase.auth.GoogleAuthProvider(); 

// always trigger google pop up when using google sign in
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

// ensuring user doc for current user exists in firestore
// userAuth from firebase auth 
export const createUserProfileDoc = async (userAuth, additionalData) => {
  // user is not signed in
  if (!userAuth) return; 

  // firestore query reference
  const userRef = firestore.doc(`users/${userAuth.uid}`); 
  const userSnapshot = await userRef.get();

  // create a new object and doc if user doc doesn't exist in firestore
  if(!userSnapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        name: displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user in firestore', error.message);
    }
  }

  return userRef; 
}

export default firebase;
