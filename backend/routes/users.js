import express from "express";
import {
  addDoc,
  collection,
  query,
  where,
  getDocs,
  getDoc,
} from "firebase/firestore";
import db from "../firestore.js";

const usersRouter = express();

usersRouter.post("/new-user", async (req, res) => {
  const userQuery = query(
    collection(db, "users"),
    where("username", "==", req.body.username)
  );
  const querySnapshot = await getDocs(userQuery);
  if (querySnapshot.size == 0) {
    try {
      await addDoc(collection(db, "users"), {
        username: req.body.username,
        password: req.body.password,
      });
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    res.status(200).send({ message: "success" });
  } else {
    res.status(500).send({ message: "username already exists" });
  }
});

usersRouter.get("/login", async (req, res) => {
  const userQuery = query(
    collection(db, "users"),
    where("username", "==", req.query.username),
    where("password", "==", req.query.password)
  );
  const querySnapshot = await getDocs(userQuery);
  if (querySnapshot.size == 1) {
    querySnapshot.forEach((doc) => {
      res.status(200).send(doc.id);
    });
  } else {
    res.status(500).send({ message: "credentials invalid" });
  }
});

export default usersRouter;
