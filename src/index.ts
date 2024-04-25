import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import router from "./routers/userRouter";

dotenv.config();

const app = express();

const port = process.env.PORT;
const PORT = port;

app.use(cors());
app.use(express.json());

app.use("/api/person", router);

mongoose
  .connect(`${process.env.MONG0DB_URI}`)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(PORT, () => {
      console.log(`Server listening on: http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error(err);
  });
