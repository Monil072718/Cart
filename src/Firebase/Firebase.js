import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDmZWHL1kExiARgUXcvPcmtfuG0tmR_x28",
  authDomain: "monilreact.firebaseapp.com",
  projectId: "monilreact",
  storageBucket: "monilreact.appspot.com",
  messagingSenderId: "498259224494",
  appId: "1:498259224494:web:39905d525688bc4e88ca3f",
  measurementId: "G-CB9GG6KVTG",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);
export { app, auth , db};
