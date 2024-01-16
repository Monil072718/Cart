import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { initializeApp } from "firebase/app";

import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCy2GMrDS9IdIcd4c9vC9kQZ4n3NCz1-wg",
  authDomain: "lab-portal-434ba.firebaseapp.com",
  databaseURL: "https://lab-portal-434ba-default-rtdb.firebaseio.com",
  projectId: "lab-portal-434ba",
  storageBucket: "lab-portal-434ba.appspot.com",
  messagingSenderId: "476652586438",
  appId: "1:476652586438:web:a1b30ccdcc1b6584eddec7",
  measurementId: "G-N71VKCTGWV"
};

firebase.initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);


export { database ,app};
export const auth = firebase.auth();

