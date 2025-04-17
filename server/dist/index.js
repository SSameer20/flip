"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const logic_1 = require("./helper/logic");
dotenv_1.default.config();
app_1.app.use((0, cors_1.default)());
app_1.app.use(express_1.default.json());
app_1.app.get("/", (req, res) => {
    res.send({ message: "server running" });
});
app_1.app.post("/play", (req, res) => {
    const { win } = (0, logic_1.gameStatus)();
    res.send({ status: "ok", win });
});
app_1.app.listen(8000, () => {
    console.log("Server is running on port 8000");
});
