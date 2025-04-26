import { Router } from "express";
import { AuthUser } from "../controller/user";

export const UserRouter = Router();

UserRouter.post("/auth", AuthUser);
