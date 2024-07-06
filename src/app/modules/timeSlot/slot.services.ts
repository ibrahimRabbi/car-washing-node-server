import { Tslot } from "./slot.interface";
import { soltModel } from "./slot.model";


export const createSlotService = async (payload: Tslot) => {
    const checkSlotExistancy = await soltModel.findOne({ 
        $and: [
            { service: payload.service },
            { date: payload.date },
            {startTime:payload.startTime}
        ]
     })
    
    if (checkSlotExistancy) {
        throw new Error('this slot already exist')
    }
    const inserting = await soltModel.create(payload)
    return inserting
}