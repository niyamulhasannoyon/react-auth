// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDzZYCjsgJhllxQ53A0Pd9Q-quTwh_Jkd0",
  authDomain: "emajohn-be91a.firebaseapp.com",
  projectId: "emajohn-be91a",
  storageBucket: "emajohn-be91a.appspot.com",
  messagingSenderId: "597322673330",
  appId: "1:597322673330:web:c33231ae57fdb595d1adab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, app }; 