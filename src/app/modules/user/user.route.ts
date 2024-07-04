import { Router } from "express";
import { createUserController } from "./user.controller";
import signupMiddleware from "../../middleware/signupValidateMiddleware";

export const userRoute = Router()

userRoute.post('/signup',signupMiddleware, createUserController)