import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { initializeApp } from "firebase/app";

import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDmZWHL1kExiARgUXcvPcmtfuG0tmR_x28",
  authDomain: "monilreact.firebaseapp.com",
  databaseURL: "https://monilreact-default-rtdb.firebaseio.com",
  projectId: "monilreact",
  storageBucket: "monilreact.appspot.com",
  messagingSenderId: "498259224494",
  appId: "1:498259224494:web:39905d525688bc4e88ca3f",
  measurementId: "G-CB9GG6KVTG"
};

firebase.initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);


export { database ,app};

export const auth = firebase.auth();
