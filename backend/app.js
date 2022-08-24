import db from "./firestore.js";
import express from "express";
import { collection, addDoc } from "firebase/firestore";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = process.env.EXPRESS_APP_PORT;

app.use(
  cors({
    origin: `${process.env.REACT_APP_HOST}:${process.env.REACT_APP_PORT}`,
    credentials: true,
  })
);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

// app.get("/", async (req, res) => {
//   try {
//     const docRef = await addDoc(collection(db, "users"), {
//       first: "Ada",
//       last: "Lovelace",
//       born: 1815,
//     });
//   } catch (e) {
//     console.error("Error adding document: ", e);
//   }
// });
