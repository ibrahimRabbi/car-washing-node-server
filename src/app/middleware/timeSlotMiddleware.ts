import { NextFunction, Request, Response } from "express";
import Joi from "joi";

export const slotValidation = (req: Request, res: Response, next: NextFunction) => {
    const validationSchema = Joi.object({
        service: Joi.string().required(),
        date: Joi.date().iso().required(),
        startTime: Joi.string().trim().required(),
        endTime: Joi.string().trim().required(),
        isBooked: Joi.boolean().default(true)
    });

    const { error, value } = validationSchema.validate(req.body);
    if (error) {
        next(error)
    } else {
        next()
    }

}