import { Router } from "express";
import { createBookingController, getAllBookingController } from "./booking.controller";
import authentication from "../../middleware/authentication";

export const bookingRoute = Router()

bookingRoute.post('/', authentication, createBookingController)

bookingRoute.get('/', authentication, getAllBookingController)