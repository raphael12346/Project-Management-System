// firebase.js

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { doc } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJlRJjrCff5SXvOcRl474OtV9-SlRB0JQ",
  authDomain: "project-management-syste-691e7.firebaseapp.com",
  projectId: "project-management-syste-691e7",
  storageBucket: "project-management-syste-691e7.appspot.com",
  messagingSenderId: "1017788362160",
  appId: "1:1017788362160:web:e997723bab2e82af1d3a75"
};


const firebasedb = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

export { db, firebasedb };
