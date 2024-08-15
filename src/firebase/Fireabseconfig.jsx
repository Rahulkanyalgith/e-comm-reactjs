// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAUaBo-cWPWoaqvAfMPCpvOfC4U5iS1-pE",
  authDomain: "golucomm-98eda.firebaseapp.com",
  projectId: "golucomm-98eda",
  storageBucket: "golucomm-98eda.appspot.com",
  messagingSenderId: "37231557775",
  appId: "1:37231557775:web:5d224c60db422ee3f9c4fa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB =getFirestore(app)
const auth =getAuth(app)

export {fireDB ,auth}