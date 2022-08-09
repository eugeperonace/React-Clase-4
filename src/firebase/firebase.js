import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAvllX9vE9TPYdhAby6FrRY0J16O_SSuTI",
  authDomain: "comision31210-2b51b.firebaseapp.com",
  projectId: "comision31210-2b51b",
  storageBucket: "comision31210-2b51b.appspot.com",
  messagingSenderId: "88350768988",
  appId: "1:88350768988:web:6c78f9a095117283ab8b99"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);