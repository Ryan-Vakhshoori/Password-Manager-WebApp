import express from "express";
import { doc, setDoc, updateDoc } from "firebase/firestore";
import db from "../firestore.js";

const passwordsRouter = express();

passwordsRouter.post("/new-password", async (req, res) => {
  try {
    const docRef = doc(db, "users", req.body.docID);
    await setDoc(
      docRef,
      {
        [req.body.site]: {
          site: req.body.site,
          username: req.body.username,
          password: req.body.password,
        },
      },
      { merge: true }
    );
    res.status(200).send({ message: "success" });
  } catch (error) {
    res.status(500).send(error);
  }
});

export default passwordsRouter;
