import { Tservice } from "./services.interface";
import { serviceModel } from "./services.model";


export const servicesLogicHandler = async (payload: Tservice) => {
    const insarting = await serviceModel.create(payload)
    return insarting
}


export const getServicesLogicHandler = async (query: any) => {
    const getData = await serviceModel.find(query)
    return getData
}


export const updateServicesLogicHandler = async (id: string, payload: Partial<Tservice>) => {

    const updating = await serviceModel.findByIdAndUpdate(id, payload)
     return updating
}

