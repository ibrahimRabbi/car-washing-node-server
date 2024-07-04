import { Tservice } from "./services.interface";
import { serviceModel } from "./services.model";


export const servicesLogicHandler = async (payload: Tservice) => {
    const insarting = await serviceModel.create(payload)
    return insarting
}