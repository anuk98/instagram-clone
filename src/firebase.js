// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore'
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyCS2GLY5XsJcIF6_KvtK_fBoqp04_v82B4",
  authDomain: "instagrams-cede4.firebaseapp.com",
  projectId: "instagrams-cede4",
  storageBucket: "instagrams-cede4.appspot.com",
  messagingSenderId: "226518774403",
  appId: "1:226518774403:web:594095f74065905d9621b6",
  measurementId: "G-8PS6RW10LB"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db =getFirestore(app)
export const auth = getAuth(app);
export const storage = getStorage(app);