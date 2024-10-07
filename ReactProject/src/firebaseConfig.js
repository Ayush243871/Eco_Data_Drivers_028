// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBIT571gtFr2csDs_pIxbW4ayTcLcpffmg",
  authDomain: "swasthproject.firebaseapp.com",
  databaseURL: "https://swasthproject-default-rtdb.firebaseio.com",
  projectId: "swasthproject",
  storageBucket: "swasthproject.appspot.com",
  messagingSenderId: "1028932282631",
  appId: "1:1028932282631:web:553dc906c6b3448248bda2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
export const auth = getAuth(app);
