
import { NextFunction, Request, Response, response } from "express";

const notFound = (req: Request, res: Response, next: NextFunction) => {
    
    return res.status(404).json({
        success: false,
        message: 'route not found'
    })
}

export default notFound