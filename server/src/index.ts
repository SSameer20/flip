import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { gameStatus } from "./helper/logic";
import { UserRouter } from "./routes/user";
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/user", UserRouter);

app.get("/", (req, res) => {
  res.send({ message: "server running" });
});

app.post("/play", (req, res) => {
  const { win } = gameStatus();
  res.send({ status: "ok", win });
});

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
