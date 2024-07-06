import { NextFunction, Request, Response, } from "express";
import { servicesLogicHandler } from "./services.services";
import userModel from "../user/user.model";

export const createServiceController = async (req: Request, res: Response, next: NextFunction) => {

    const findUser = await userModel.findOne({ email: req.user.email })

    try {

        if (findUser?.role === 'user') {
            throw new Error('unauthorized access')
        }
        const insertedService = await servicesLogicHandler(req.body)
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