import { NextFunction, Request, Response, } from "express";
import { deleteServicesLogicHandler, getServicesLogicHandler, servicesLogicHandler, updateServicesLogicHandler } from "./services.services";
import userModel from "../user/user.model";




export const createServiceController = async (req: Request, res: Response, next: NextFunction) => {

    const findUser = await userModel.findOne({ email: req.user.email })

    try {

        if (findUser?.role === 'user') {
            throw new Error('unauthorized access: this route only for admin')
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



//get services data

export const getServiceController = async (req: Request, res: Response, next: NextFunction) => {
    let query = {}

    if (req.params?.id) {
        query = { _id: req.params?.id }
    }


    try {
        const insertedService = await getServicesLogicHandler(query)

        res.status(200).json({
            success: true,
            statusCode: 200,
            message: "Service retrieved successfully",
            data: insertedService
        })
    } catch (err: any) {
        next(err)
    }
}




//update services data

export const updateServiceController = async (req: Request, res: Response, next: NextFunction) => {

    const findUser = await userModel.findOne({ email: req.user.email })
    try {

        if (findUser?.role === 'user') {
            throw new Error('unauthorized access: this route only for admin')
        }
        const updatedService = await updateServicesLogicHandler(req.params?.id, req.body)
        res.status(200).json({
            success: true,
            statusCode: 200,
            message: "Service update successfully",
            data: updatedService
        })
    } catch (err: any) {
        next(err)
    }
}


// delete service
export const deleteServiceController = async (req: Request, res: Response, next: NextFunction) => {
     
    const findUser = await userModel.findOne({ email: req.user.email })
    try {

        if (findUser?.role === 'user') {
            throw new Error('unauthorized access: this route only for admin')
        }

        const updatedService = await deleteServicesLogicHandler(req.params?.id)
        res.status(200).json({
            success: true,
            statusCode: 200,
            message: "Service deleted successfully",
            data: updatedService
        })
    } catch (err: any) {
        next(err)
    }
}