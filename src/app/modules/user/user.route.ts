import { Router } from "express";
import { createUserController } from "./user.controller";
import signupMiddleware from "../../middleware/signupValidateMiddleware";
import { authController } from "../authentication/auth.controller";

export const userRoute = Router()

userRoute.post('/signup', signupMiddleware, createUserController)

userRoute.post('/signin', authController)