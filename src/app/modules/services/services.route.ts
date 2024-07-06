import { Router } from "express";
import { createServiceController } from "./services.controller";
import authentication from "../../middleware/authentication";

export const serviceRoute = Router()

serviceRoute.post('/', authentication, createServiceController)