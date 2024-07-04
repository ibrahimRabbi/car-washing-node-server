import { NextFunction, Request, Response,  } from "express";
import { servicesLogicHandler } from "./services.services";

export const createServiceController = async (req: Request, res:Response, next:NextFunction) => {
    try {
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