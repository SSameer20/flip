"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateGame = void 0;
const utils_1 = require("../helper/utils");
const client_1 = require("@prisma/client");
const client = new client_1.PrismaClient();
const CreateGame = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { PublicKey } = req.body;
        if (!PublicKey) {
            res.status(utils_1.STATUS_CODE.ERROR).send({ message: "No Public Key Found" });
            return;
        }
        let User = yield client.user.findUnique({
            where: {
                PublicKey,
            },
        });
        if (!User) {
            User = yield client.user.create({
                data: {
                    PublicKey,
                },
            });
        }
        return;
    }
    catch (error) {
        res
            .status(utils_1.STATUS_CODE.SERVER_ERROR)
            .send({ message: "Something went wrong" });
        return;
    }
});
exports.CreateGame = CreateGame;
