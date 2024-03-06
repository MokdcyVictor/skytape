import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBl-fMDb72rBKpiCLv4K3ImJH8D_7Sf90Q",
    authDomain: "skypetape-5b06b.firebaseapp.com",
    projectId: "skypetape-5b06b",
    storageBucket: "skypetape-5b06b.appspot.com",
    messagingSenderId: "224955509657",
    appId: "1:224955509657:web:e97c033f9bf020a42e4108"
  };
  // If you want to start measuring performance in your app, pass a function
  // to log results (for example: reportWebVitals(console.log))
  // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
  reportWebVitals();
  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app)
  export const db = getFirestore(app)
  