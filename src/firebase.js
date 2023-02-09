import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAGNMHsbcmk0Y5Sa7wledKvoHTQuj22xM8",
  authDomain: "ecom-devs.firebaseapp.com",
  projectId: "ecom-devs",
  storageBucket: "ecom-devs.appspot.com",
  messagingSenderId: "98261791710",
  appId: "1:98261791710:web:34093541912388ed33e34f",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();

const auth = getAuth();

const provider = new GoogleAuthProvider();

export { db, app, auth, provider };
