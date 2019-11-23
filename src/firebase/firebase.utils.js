import firebase from "firebase/app";

import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCAXVkTbM9E_F7RBetaZ3wzWllPlrgqdL4",
  authDomain: "crown-db-d3f73.firebaseapp.com",
  databaseURL: "https://crown-db-d3f73.firebaseio.com",
  projectId: "crown-db-d3f73",
  storageBucket: "crown-db-d3f73.appspot.com",
  messagingSenderId: "275926925676",
  appId: "1:275926925676:web:d98003a0fdacd009573349",
  measurementId: "G-25H042BCHR"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log("Error creating user", error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
