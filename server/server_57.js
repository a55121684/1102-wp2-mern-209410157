import connectDB from "./db/connect_57.js";
import express from "express";
import dotenv from "dotenv";

const app = express();
const port = process.env.PORT || 5000;

dotenv.config();

app.get("/", (req, res) => {
  res.send("Welcome");
});

const start = async () => {
  try {
    await connectDB(process.env.MONGO_LOCAL_URL).then(() => {
      console.log("Success Connect");
    });
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (e) {
    console.log(e);
  }
};

start();
