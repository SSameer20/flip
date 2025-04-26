"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const logic_1 = require("./helper/logic");
const user_1 = require("./routes/user");
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use("/user", user_1.UserRouter);
app.get("/", (req, res) => {
    res.send({ message: "server running" });
});
app.post("/play", (req, res) => {
    const { win } = (0, logic_1.gameStatus)();
    res.send({ status: "ok", win });
});
app.listen(8000, () => {
    console.log("Server is running on port 8000");
});
