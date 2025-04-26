import { Request, Response } from "express";
import { STATUS_CODE } from "../helper/utils";
import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

export const AuthUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const { Email, PublicKey } = req.body;
    if (!PublicKey) {
      res
        .status(STATUS_CODE.NOT_FOUND)
        .send({ message: "user PublicKey not found" });
      return;
    }

    let user = await client.user.findUnique({
      where: {
        PublicKey,
      },
    });

    if (!user) {
      user = await client.user.create({
        data: {
          PublicKey,
          Email,
        },
      });
    }
    res.status(STATUS_CODE.OK).json({
      message: "User authenticated",
      user,
    });
    return;
  } catch (error) {
    res
      .status(STATUS_CODE.SERVER_ERROR)
      .send({ message: "Something went wrong" });
    return;
  }
};
