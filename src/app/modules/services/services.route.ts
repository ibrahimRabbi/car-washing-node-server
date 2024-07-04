import { Router } from "express";
import { createServiceController } from "./services.controller";

export const serviceRoute = Router()

serviceRoute.post('/', createServiceController)