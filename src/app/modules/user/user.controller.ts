import { NextFunction, Request, Response } from "express";
import { userSignupService } from "./user.services";


export const createUserController = async (req:Request,res:Response,next:NextFunction) => {
    try {
        const inserted = await userSignupService(req.body)
        res.status(200).json({
            success: true,
            message: "user signup successfully",
            data:inserted
        })
    } catch (err: any) {
        next(err)
    }
}