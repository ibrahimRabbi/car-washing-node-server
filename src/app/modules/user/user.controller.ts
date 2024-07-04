import { NextFunction, Request, Response } from "express";
import { userSignupService } from "./user.services";


export const createUserController = async (req: Request, res: Response, next: NextFunction) => {
    const statusCode = 200
    try {
        const inserted = await userSignupService(req.body)
        res.status(statusCode).json({
            success: true,
            statusCode: statusCode,
            message: "user signup successfully",
            data: inserted
        })
    } catch (err: any) {
        next(err)
    }
}