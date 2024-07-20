// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCWsdPn4WU-3RKLvJE9r8VvQE-PaC-E8b8",
  authDomain: "live-time-chat-a39d2.firebaseapp.com",
  projectId: "live-time-chat-a39d2",
  storageBucket: "live-time-chat-a39d2.appspot.com",
  messagingSenderId: "54913060520",
  appId: "1:54913060520:web:b079efbce66e8e6ecebc9d",
  measurementId: "G-SL113J1YBZ",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
