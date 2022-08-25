import db from "./firestore.js";
import express from "express";
import { collection, addDoc } from "firebase/firestore";
import cors from "cors";
import dotenv from "dotenv";
import usersRouter from "./routes/users.js";
import bodyParser from "body-parser";
dotenv.config();

const app = express();
app.use(bodyParser.json({ limit: "200mb" }));
app.use(bodyParser.urlencoded({ limit: "200mb", extended: true }));

app.use(bodyParser.raw());
const PORT = process.env.EXPRESS_APP_PORT;

app.use(
  cors({
    origin: `${process.env.REACT_APP_HOST}:${process.env.REACT_APP_PORT}`,
    credentials: true,
  })
);

app.use("/users", usersRouter);

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
