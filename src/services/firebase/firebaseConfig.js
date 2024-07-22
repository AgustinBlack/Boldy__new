import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAVSSNFJUNx5U5naT2pJt59M97XSPejh-c",
  authDomain: "boldy-284f2.firebaseapp.com",
  projectId: "boldy-284f2",
  storageBucket: "boldy-284f2.appspot.com",
  messagingSenderId: "600632746965",
  appId: "1:600632746965:web:da4efc170857b6db59d35c"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
