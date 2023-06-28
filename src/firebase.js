import firebase from "firebase/compat/app";

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAbvgQM_YfY4RqkAOpLgY81W6VvRZl5rOo",
  authDomain: "bssm-33974.firebaseapp.com",
  projectId: "bssm-33974",
  storageBucket: "bssm-33974.appspot.com",
  messagingSenderId: "934342225381",
  appId: "1:934342225381:web:7c4a15ed3eba10d4ced30c",
  measurementId: "G-N9S8NDGLS6",
};

const app = initializeApp(firebaseConfig);
const fireStore = getAnalytics(app);
const authService = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { fireStore, authService, db, app, storage };
