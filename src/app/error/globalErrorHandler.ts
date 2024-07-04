import { NextFunction, Request, Response } from "express";

 

const globalErrorHandler = (err:any,req:Request,res:Response,next:NextFunction) => {
    
    return res.status(404).json({
        success: false,
        message: err.message,
        errSource: err
    })
};

export default globalErrorHandler;