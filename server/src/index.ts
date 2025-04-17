import { app } from "./app";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { gameStatus } from "./helper/logic";
dotenv.config();

app.use(cors());
app.use(express.json());

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
