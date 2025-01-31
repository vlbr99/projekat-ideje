import { configDotenv } from "dotenv";
import Idea from "./models/Idea";
configDotenv();
import mongoose from "mongoose";
let uri = process.env.MONGO_URI;

mongoose
  .connect(uri)
  .then(() => {
    console.log("connected to db");
  })
  .catch((error) => {
    console.log(error);
  });
