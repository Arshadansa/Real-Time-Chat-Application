
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
 
const firebaseConfig = {
  apiKey: "AIzaSyBdvnebf34EUMTNG3ESTcSBxtp7xL6FLdY",
  authDomain: "chat-application-2490e.firebaseapp.com",
  projectId: "chat-application-2490e",
  storageBucket: "chat-application-2490e.appspot.com",
  messagingSenderId: "5678703888",
  appId: "1:5678703888:web:b7b5a6d454db484972b195"
};
 

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();//create my own funtion auth and use getAuth()
export const storage = getStorage(); 
export const db= getFirestore();