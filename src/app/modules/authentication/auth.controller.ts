import { NextFunction, Request, Response } from "express";
import { authService } from "./auth.services";

export const authController = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { checkuserExistancy, accessToken } = await authService(req.body)
        res.status(200).json({
            success: true,
            statusCode: 200,
            message: "User logged in successfully",
            token: accessToken,
            data: checkuserExistancy
        })
    } catch (err: any) {
        next(err)
    }
}