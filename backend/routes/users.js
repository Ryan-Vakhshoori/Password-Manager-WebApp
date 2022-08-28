import express from "express";
import {
  addDoc,
  collection,
  query,
  where,
  getDocs,
  updateDoc,
  doc,
  setDoc,
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
      const docRef = await addDoc(collection(db, "users"), {
        password_manager: {
          site: "password_manager",
          username: req.body.username,
          password: req.body.password,
        },
      });
      res.status(200).send(docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  } else {
    res.status(500).send({ message: "username already exists" });
  }
});

usersRouter.get("/login", async (req, res) => {
  const userQuery = query(
    collection(db, "users"),
    where("password_manager.username", "==", req.query.username),
    where("password_manager.password", "==", req.query.password)
  );
  const querySnapshot = await getDocs(userQuery);
  if (querySnapshot.size == 1) {
    querySnapshot.forEach((doc) => {
      res.status(200).send(doc.id);
    });
  } else {
    res.status(500).send({ message: "invalid credentials" });
  }
});

usersRouter.get("/forgot-password", async (req, res) => {
  try {
    const userQuery = query(
      collection(db, "users"),
      where("password_manager.username", "==", req.query.username)
    );
    const querySnapshot = await getDocs(userQuery);
    if (querySnapshot.size == 1) {
      querySnapshot.forEach((doc) => {
        res.status(200).send(doc.id);
      });
    } else {
      res.status(201).send({ message: "username does not exist" });
    }
  } catch (error) {
    res.status(500).send(error);
  }
});

usersRouter.put("/reset-password", async (req, res) => {
  try {
    const docRef = doc(db, "users", req.body.docID);
    await updateDoc(docRef, {
      "password_manager": {
        "site": "password_manager",
        "username": req.body.username,
        "password": req.body.password,
      },
    });
    res.status(200).send({ message: "success" });
  } catch (error) {
    res.status(500).send(error);
  }
});

export default usersRouter;
