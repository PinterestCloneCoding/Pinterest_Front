import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDRgZSlEn5XBEApV59LF2GKEjnoOdAKpGI",
  authDomain: "pinterclone.firebaseapp.com",
  projectId: "pinterclone",
  storageBucket: "pinterclone.appspot.com",
  messagingSenderId: "1049084566422",
  appId: "1:1049084566422:web:c7addcd6c3a93248fd1bb7",
  measurementId: "G-94MLEME0TY"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
