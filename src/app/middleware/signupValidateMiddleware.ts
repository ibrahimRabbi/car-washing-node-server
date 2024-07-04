import { NextFunction, Request, Response } from "express";
import Joi from "joi";

const schema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    role: Joi.string().valid('user', 'admin').required(),
    phone: Joi.string().required().max(11),
    address: Joi.string().required(),
})


const signupMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const { error, value } = schema.validate(req.body)
    if (error) {
        next(error)
    } else {
        next()
    }

}


export default signupMiddleware