import { initializeApp, getApp, getApps } from "firebase/app";
import {GoogleAuthProvider, getAuth, onAuthStateChanged} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";
import { UserFunction } from "../Context/UserContext";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGEBUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID
  };
  // const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
  
const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const db = getFirestore(app);
const storage = getStorage(app);
  export {app, auth, db, googleProvider, storage,onAuthStateChanged};

 