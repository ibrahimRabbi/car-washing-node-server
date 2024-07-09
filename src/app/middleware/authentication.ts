import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from 'jsonwebtoken';
import envData from "../config/config";
 


const authentication = async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization
    const sliceToken = token?.split(' ') as string[]
    const finalToken = sliceToken[1]
     
    try {
        if (!token) {
            throw new Error('unthorized user')
        }


        const verified = jwt.verify(finalToken as string, envData.secret_key as string)
        if (!verified) {
            throw new Error('unthorized user')
        }
        req.user = verified as JwtPayload
        next()
    } catch (err: any) {
        next(err)
    }

   
}

export default authentication