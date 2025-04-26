import { Request, Response } from "express";
import { STATUS_CODE } from "../helper/utils";
import { PrismaClient } from "@prisma/client";
import { LAMPORTS_PER_SOL } from "@solana/web3.js";
const client = new PrismaClient();

export const CreateGame = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { PublicKey, bet } = req.body;
    if (!PublicKey) {
      res.status(STATUS_CODE.ERROR).send({ message: "No Public Key Found" });
      return;
    }
    let User = await client.user.findUnique({
      where: {
        PublicKey,
      },
    });

    if (!User) {
      User = await client.user.create({
        data: {
          PublicKey,
        },
      });
    }

    const Game = await client.game.create({
      data: {
        Name: "coin-flip",
        Bet: bet * LAMPORTS_PER_SOL,
        UserId: User.Id,
        Status: "pending",
      },
    });

    res
      .status(STATUS_CODE.CREATED)
      .send({ message: "game created", GameId: Game.Id });
    return;
  } catch (error) {
    res
      .status(STATUS_CODE.SERVER_ERROR)
      .send({ message: "Something went wrong" });
    return;
  }
};
