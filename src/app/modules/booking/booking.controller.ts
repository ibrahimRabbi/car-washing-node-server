import { NextFunction, Request, Response, } from "express";
import userModel from "../user/user.model";
import { createBookingService, getAllookingService, getSingleBookingService } from "./booking.services";
import { Types } from "mongoose";
import { bookingModel } from "./booking.model";



export const createBookingController = async (req: Request, res: Response, next: NextFunction) => {
    const findUser = await userModel.findOne({ email: req.user.email })
    try {

        if (findUser?.role === 'admin') {
            throw {
                statusCode: 403,
                message: 'unauthorized access'
            }
        }

        const insertedService = await createBookingService(req.body, findUser?._id as Types.ObjectId)

        res.status(200).json({
            success: true,
            statusCode: 200,
            message: "service created successfully",
            data: insertedService
        })
    } catch (err: any) {
        next(err)
    }
}




//get all booking
export const getAllBookingController = async (req: Request, res: Response, next: NextFunction) => {

    const findUser = await userModel.findOne({ email: req.user.email }).select('role')

    try {

        if (findUser?.role === 'user') {
            throw {
                statusCode: 403,
                message: 'unauthorized access: this route only for admin'
            }
        }

        const insertedService = await getAllookingService()
        res.status(200).json({
            success: true,
            statusCode: 200,
            message: "All bookings retrieved successfully",
            data: insertedService
        })
    } catch (err: any) {
        next(err)
    }
}





//get single booking
export const getSingleBookingController = async (req: Request, res: Response, next: NextFunction) => {
    const findUser = await userModel.findOne({ email: req.user.email }).select('role')

    try {

        if (findUser?.role === 'admin') {
            throw {
                statusCode: 403,
                message: 'unauthorized access: this route only for user'
            }
        }

        const insertedService = await getSingleBookingService(findUser?._id as Types.ObjectId)
        res.status(200).json({
            success: true,
            statusCode: 200,
            message: "user bookings retrieved successfully",
            data: insertedService
        })
    } catch (err: any) {
        next(err)
    }
}