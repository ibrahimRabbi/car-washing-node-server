import { NextFunction, Request, Response } from "express";
import { createSlotService } from "./slot.services";
import userModel from "../user/user.model";

export const createSlotController = async (req: Request, res: Response, next: NextFunction) => {
    
    const findUser = await userModel.findOne({ email: req.user.email })

    try {
        if (findUser?.role === 'user') {
            throw new Error('unauthorized access')
        }

        const insertedService = await createSlotService(req.body)
        res.status(200).json({
            success: true,
            statusCode: 200,
            message: "slot created successfully",
            data: insertedService
        })

    } catch (err: any) {
        next(err)
    }

}