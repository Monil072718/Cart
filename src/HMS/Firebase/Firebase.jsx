
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { initializeApp } from "firebase/app";

import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAcWd-VBhbb3Y9NBw77wAzj3Kvp8OvaJpA",
  authDomain: "hms-react-55337.firebaseapp.com",
  databaseURL: "https://hms-react-55337-default-rtdb.firebaseio.com",
  projectId: "hms-react-55337",
  storageBucket: "hms-react-55337.appspot.com",
  messagingSenderId: "799920397180",
  appId: "1:799920397180:web:ae400b3ebbe1df0959a2f9",
  measurementId: "G-Q9GC7HD5NC"
};

firebase.initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);


export { database ,app};
export const auth = firebase.auth();