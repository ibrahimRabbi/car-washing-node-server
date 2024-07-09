import { NextFunction, Request, Response } from "express";

 

const globalErrorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
    let statusCode = 404
    let message = err.message;
    let errSource = err.details || err
     
 
    if (err.details) {
        statusCode = 400
    }

    if (err.statusCode) {
        statusCode = err.statusCode
    }
    
    return res.status(statusCode).json({
        success: false,
        statusCode : statusCode,
        message: message,
        errSource: errSource
    })
};

export default globalErrorHandler;