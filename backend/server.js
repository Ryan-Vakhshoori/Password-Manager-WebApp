import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  Firestore,
} from "firebase/firestore";
import express from "express";

const firebaseConfig = {
  apiKey: "AIzaSyDO7ZjQJ1BseZWIoAQQJsmri7JHi1xIPVM",
  authDomain: "password-manager-a044d.firebaseapp.com",
  projectId: "password-manager-a044d",
  storageBucket: "password-manager-a044d.appspot.com",
  messagingSenderId: "169481468260",
  appId: "1:169481468260:web:deefb62e5cb55de798e271",
  measurementId: "G-H9B1X0TR7T",
};

const server = express();
server.use(express.json());
const port = 3000;
server.listen(port, () => {
  console.log(`listening on ${port}`);
});

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

server.get('/', async (req, res) => {
  res.json({status: 'ready'});
})

// try {
//   const docRef = await addDoc(collection(db, "users"), {
//     username: "rost",
//     password: "1277"
//   });
//   console.log("Document written with ID: ", docRef.id);
// } catch (e) {
//   console.error("Error adding document: ", e);
// }
