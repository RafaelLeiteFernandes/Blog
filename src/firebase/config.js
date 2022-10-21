import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDKVlNmvIW6RQyGo9Fi9IVRWwH6oslkpOg",
  authDomain: "miniblog-e69cf.firebaseapp.com",
  projectId: "miniblog-e69cf",
  storageBucket: "miniblog-e69cf.appspot.com",
  messagingSenderId: "270122834182",
  appId: "1:270122834182:web:ffa1a7d1867f7210e8a687",
  measurementId: "G-HH7DW02G70"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export {db};