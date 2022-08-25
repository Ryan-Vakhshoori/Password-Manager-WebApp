import express from "express";
import { collection, doc, updateDoc } from "firebase/firestore";
import db from "../firestore.js";

const passwordsRouter = express();

passwordsRouter.post("/new-password", async (req, res) => {
  try {
    await db.collection("users").doc(req.body.docID).set(
    {
      site: req.body.site,
      username: req.body.username,
      password: req.body.password,
    },
      { merge: true },
    );
    // const docRef = doc(db, "users", req.body.docID);
    // await updateDoc(docRef, {
    //   site: req.body.site,
    //   username: req.body.username,
    //   password: req.body.password,
    // });
    res.status(200).send({ message: "success" });
  } catch (error) {
    res.status(500).send(error);
  }
});

export default passwordsRouter;