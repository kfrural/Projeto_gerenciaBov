import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

import { FIREBASE_PROJECT_ID, FIREBASE_PRIVATE_KEY } from '../.env';

const firebaseConfig = {
  apiKey: FIREBASE_PRIVATE_KEY,
  authDomain: `https://${FIREBASE_PROJECT_ID}.firebaseapp.com`,
  projectId: FIREBASE_PROJECT_ID,
  storageBucket: `${FIREBASE_PROJECT_ID}.firebasestorage.app`,
  messagingSenderId: "595832135088",
  appId: "1:595832135088:web:e44553b7dab04ee04c8a75",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
