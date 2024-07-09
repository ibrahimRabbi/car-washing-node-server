import { Tslot } from "./slot.interface";
import { soltModel } from "./slot.model";


export const createSlotService = async (payload: Tslot) => {
    const checkSlotExistancy = await soltModel.find({ 
        $and: [
            { service: payload.service },
            { date: payload.date }
        ]
    })
    

    if (checkSlotExistancy.length) {

        checkSlotExistancy.forEach(v => {
            const existStrtTime = new Date(`1971-07-08T${v.startTime}`)
            const existEndTime = new Date(`1971-07-08T${v.endTime}`)
            const newStrtTime = new Date(`1971-07-08T${payload.startTime}`)
            const newEndTime = new Date(`1971-07-08T${payload.endTime}`)

            
            if (newStrtTime < existEndTime && newEndTime > existStrtTime) {
                throw {
                    statusCode: 400,
                    message: 'this slot already exist choose another slot or date'
                }
            }
        })
          
    }

    
    const inserting = await soltModel.create(payload)
    return inserting
}


export const getSlotService = async () => {
    const finding = await soltModel.find({ isBooked: 'available' }).populate('service')
    return finding
}