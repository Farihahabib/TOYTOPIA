// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHlVDRt3R5-8NdgyjFnXdef6q8w3WWXPs",
  authDomain: "toytopia-4389f.firebaseapp.com",
  projectId: "toytopia-4389f",
  storageBucket: "toytopia-4389f.firebasestorage.app",
  messagingSenderId: "255464295397",
  appId: "1:255464295397:web:4b267606cdaf977ea03d0c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export {app}