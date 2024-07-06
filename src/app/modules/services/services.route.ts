import { Router } from "express";
import { createServiceController, getServiceController, updateServiceController } from "./services.controller";
import authentication from "../../middleware/authentication";
import { serviceUpdateValidation } from "../../middleware/serviceUpdateMiddle";

export const serviceRoute = Router()

serviceRoute.post('/', authentication, createServiceController)

serviceRoute.get('/', getServiceController)

serviceRoute.get('/:id', getServiceController)

serviceRoute.put('/:id', serviceUpdateValidation, authentication, updateServiceController)