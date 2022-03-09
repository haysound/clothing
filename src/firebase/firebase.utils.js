import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyAP9WP-ktMHZd1RjqKzgchvFsxarqumAxw",
  authDomain: "clothing-db-12b1d.firebaseapp.com",
  projectId: "clothing-db-12b1d",
  storageBucket: "clothing-db-12b1d.appspot.com",
  messagingSenderId: "291992522054",
  appId: "1:291992522054:web:ee48d67aebbd20a5302947",
  measurementId: "G-BKYGGXC4T2",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
