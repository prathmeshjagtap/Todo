import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAYBdxBsDdpJwvUEH2ShA3w6xUVwk39uck",
  authDomain: "todo-b2ee5.firebaseapp.com",
  projectId: "todo-b2ee5",
  storageBucket: "todo-b2ee5.appspot.com",
  messagingSenderId: "943003829110",
  appId: "1:943003829110:web:3507ee39ff3b817ad33057",
  measurementId: "G-WNFDBS4F47",
});

const db = firebaseApp.firestore();

export default db;
