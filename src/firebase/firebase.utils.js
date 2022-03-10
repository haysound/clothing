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
        ...additionalData,
      });
    } catch (e) {
      console.log("error in saving user", e.message);
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
