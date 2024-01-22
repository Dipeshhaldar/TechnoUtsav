import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
import config from "./config.js";

app.use(cors());
app.use(express.json());

const mongoURI = config.mongoURI;

//done my setup to connect my mongo composs to my nodejs

mongoose
  .connect(mongoURI)
  .then(() => app.listen(5500))
  .then(() => console.log("connected to db at port 5500 :)"))
  .catch((err) => console.log(`${err} is error`));
    