import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from 'jsonwebtoken';
import envData from "../config/config";
 


const authentication = async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization

    if (!token) {
        throw new Error('unthorized user')
    }


    const verified = jwt.verify(token as string, envData.secret_key as string)
    if (!verified) {
        throw new Error('unauthorized user')
    }

    req.user = verified as JwtPayload
    next()
}

export default authentication