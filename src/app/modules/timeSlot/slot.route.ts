import { Router } from "express";
import { createSlotController } from "./slot.controller";
import { slotValidation } from "../../middleware/timeSlotMiddleware";
import authentication from "../../middleware/authentication";

export const slotRoute = Router()

slotRoute.post('/slots',slotValidation, authentication, createSlotController)