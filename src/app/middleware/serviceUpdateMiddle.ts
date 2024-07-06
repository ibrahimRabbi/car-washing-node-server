import Joi from "joi";
import { NextFunction, Request, Response } from "express";


export const serviceUpdateValidation = (req: Request, res: Response, next: NextFunction) => {
      
    const validationSchema = Joi.object({
        name: Joi.string().max(30).optional(),
        description: Joi.string().max(100).optional(),
        price: Joi.number().optional(),
        duration: Joi.number().optional(),
        isdeleted: Joi.boolean().optional()
    });

    const { error, value } = validationSchema.validate(req.body);
    if (error) {
        next(error)
    } else {
        next()
    }

}