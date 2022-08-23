import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDO7ZjQJ1BseZWIoAQQJsmri7JHi1xIPVM",
  authDomain: "password-manager-a044d.firebaseapp.com",
  projectId: "password-manager-a044d",
  storageBucket: "password-manager-a044d.appspot.com",
  messagingSenderId: "169481468260",
  appId: "1:169481468260:web:deefb62e5cb55de798e271",
  measurementId: "G-H9B1X0TR7T"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

try {
  const docRef = await addDoc(collection(db, "users"), {
    username: "rost",
    password: "1277"
  });
  console.log("Document written with ID: ", docRef.id);
} catch (e) {
  console.error("Error adding document: ", e);
}