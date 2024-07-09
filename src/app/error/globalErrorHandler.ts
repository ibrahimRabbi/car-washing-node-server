import { NextFunction, Request, Response } from "express";

 

const globalErrorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
    let statusCode = 404
    let message = err.message;
  
 
    if (err.details) {
        statusCode = 400
    }

    if (Object.keys(err).length) {
        statusCode = err.statusCode
        message = err.message
    }

     

    

    
    return res.status(statusCode).json({
        success: false,
        statusCode : statusCode,
        message: message,
        errSource: err
    })
};

export default globalErrorHandler;