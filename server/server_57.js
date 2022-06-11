import connectDB from "./db/connect_57.js";
import express from "express";
import "express-async-errors";
import morgan from "morgan";
import dotenv from "dotenv";
import notFoundMiddleware_57 from "./middleware/not-found_57.js";
import errorHandlerMiddleware_57 from "./middleware/error-handler_57.js";
import authRoutes_57 from "./routes/authRoutes_57.js";
import cors from "cors";

const app = express();
app.use(cors());
if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}

const port = process.env.PORT || 5000;

dotenv.config();
app.use(express.json());

app.get("/", (req, res) => {
  // throw Error("test");
  res.json({ msg: "Welcome -- 游志信 209410157" });
});

app.get("/api/v1", (req, res) => {
  res.json({ msg: "API v1 -- 游志信 209410157" });
});

app.use("/api/v1/auth_57", authRoutes_57);

app.use(notFoundMiddleware_57);
app.use(errorHandlerMiddleware_57);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_LOCAL_URL).then(() => {
      console.log("Success Connect");
    });
    // await connectDB(process.env.MONGO_LOCAL_URL).then(() => {
    //   console.log("Success Connect");
    // });
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (e) {
    console.log(e);
  }
};

start();
