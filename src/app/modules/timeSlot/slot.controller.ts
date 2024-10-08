import { NextFunction, Request, Response } from "express";
import { createSlotService, getSlotService } from "./slot.services";
import userModel from "../user/user.model";
import { soltModel } from "./slot.model";



export const createSlotController = async (req: Request, res: Response, next: NextFunction) => {
    
    const findUser = await userModel.findOne({ email: req.user.email }).select('role')

    try {
        if (findUser?.role === 'user') {
            throw {
                statusCode: 403,
                message: 'unauthorized access: this route only for admin'
            }
        }

        await createSlotService(req.body)
        const allSlot = await soltModel.find({})
        
        res.status(200).json({
            success: true,
            statusCode: 200,
            message: "slot created successfully",
            data: allSlot
        })

    } catch (err: any) {
        next(err)
    }

}




export const getSlotController = async (req: Request, res: Response, next: NextFunction) => {
 
    try {
        const insertedService = await getSlotService()
        res.status(200).json({
            success: true,
            statusCode: 200,
            message: "available slot rtrived successfully",
            data: insertedService
        })

    } catch (err: any) {
        next(err)
    }

}