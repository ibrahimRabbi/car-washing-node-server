import { NextFunction, Request, Response } from "express";
import { createSlotService } from "./slot.services";

export const createSlotController = async (req: Request, res: Response, next: NextFunction) => {
    try {
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