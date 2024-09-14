// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9XxzqAvZtTmGwmcgnw_eRb7kXpWJyl8E",
  authDomain: "x-clone-7ee4e.firebaseapp.com",
  projectId: "x-clone-7ee4e",
  storageBucket: "x-clone-7ee4e.appspot.com",
  messagingSenderId: "581887915215",
  appId: "1:581887915215:web:c5422a141cfe1876bc33ba",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//kimlik doğrulama yapısının referansını al
export const auth = getAuth(app);

//google kurulumu
export const provider = new GoogleAuthProvider();

//veritabanının referansını verir
export const db = getFirestore(app);

//Storage in referansını verir
export const storage = getStorage(app);
