import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';

import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDAwK__HsIOBIOWIlrRgAsld-xTmJLlhrk',
  authDomain: 'crwn-cloting-db-2ef54.firebaseapp.com',
  projectId: 'crwn-cloting-db-2ef54',
  storageBucket: 'crwn-cloting-db-2ef54.appspot.com',
  messagingSenderId: '570739711036',
  appId: '1:570739711036:web:c2786496021847fc49b739',
};

const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  console.log(userAuth);
  if (!userAuth) return;
  const userDocRef = doc(db, 'users', userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  console.log('Does it exist', userSnapshot.exists());

  if (!userSnapshot.exists()) {
    const { email, displayName } = userAuth;

    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        email,
        displayName,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.error('error creating the user', error.message);
    }
  }

  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  if (email) return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  if (email) return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = callback =>
  onAuthStateChanged(auth, callback);
