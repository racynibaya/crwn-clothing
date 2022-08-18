import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
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

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async userAuth => {
  const userDocRef = doc(db, 'users', userAuth.uid);
  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);

  console.log(userSnapshot.exists());
  if (!userSnapshot.exists()) {
    const { email, displayName } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        email,
        displayName,
        createdAt,
      });
    } catch (error) {
      console.error('error creating the user', error.message);
    }
  }

  return userDocRef;
};
