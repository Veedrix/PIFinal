import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD1_BwDx1mhOPRWPDaxgrwx1efPeXY-c9E",
  authDomain: "chat-8bd0d.firebaseapp.com",
  projectId: "chat-8bd0d",
  storageBucket: "chat-8bd0d.appspot.com",
  messagingSenderId: "6851162361",
  appId: "1:6851162361:web:f490604ca40b478491b228",
  measurementId: "G-Q6J91GT1B4",
};

export const app = initializeApp(firebaseConfig);
export const databaseApp = getFirestore(app);
