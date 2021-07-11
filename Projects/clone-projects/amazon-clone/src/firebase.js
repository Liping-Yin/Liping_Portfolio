import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDwZQBwKR5-hIrtE8DScD6gpwSEvLUJV8w",
  authDomain: "clone-357aa.firebaseapp.com",
  projectId: "clone-357aa",
  storageBucket: "clone-357aa.appspot.com",
  messagingSenderId: "693997757863",
  appId: "1:693997757863:web:2adeaf828233ad02310282",
  measurementId: "G-FPWST6B2T0",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
