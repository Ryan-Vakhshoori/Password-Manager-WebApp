import express from "express";
import { deleteField, doc, getDoc, setDoc, updateDoc } from "firebase/firestore";
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

passwordsRouter.get("/get-passwords", async (req, res) => {
  try {
    const docRef = doc(db, "users", req.query.docID);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const data = docSnap.data();
      const arr = [];
      for (const property in data) {
        arr.push(data[property]);
      }
      res.status(200).send(arr);
    }
  } catch (error) {
    res.status(500).send(error);
  }
})

passwordsRouter.delete("/delete-password", async (req, res) => {
  try {
    const docRef = doc(db, "users", req.body.docID);
    await updateDoc(docRef, {
      [req.body.site]: deleteField()
    });
    res.status(200).send({ message: "password successfully deleted" })
  } catch (error) {
    res.status(500).send(error);
  }
})

export default passwordsRouter;
