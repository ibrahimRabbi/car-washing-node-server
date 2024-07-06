import { Router } from "express";
import { createSlotController } from "./slot.controller";
import { slotValidation } from "../../middleware/timeSlotMiddleware";

export const slotRoute = Router()

slotRoute.post('/slot',slotValidation, createSlotController)