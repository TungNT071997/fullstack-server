import express from "express";
import mongoose from "mongoose";

import bodyParser from "body-parser";
import cors from "cors";

import posts from "./routers/posts.js";

const app = express();
const PORT = process.env.port || 5000;
const URL = "mongodb://localhost:27017";

app.use(bodyParser.json({ limit: "30mb" }));
app.use(bodyParser.urlencoded({ extends: true, limit: "30mb" }));
app.use(cors());

app.use("/posts", posts);

mongoose
  .connect(URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connect to MongooseDB");
    app.listen(PORT, () => {
      console.log(`server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("err", err);
  });
