import mongoose, { Types } from "mongoose";
import Tbooking from "./booking.interface";
import { bookingModel } from "./booking.model";
import { soltModel } from "../timeSlot/slot.model";

export const createBookingService = async (payload: Tbooking, userId: Types.ObjectId) => {

    const session = await mongoose.startSession()
    const getSlot = await soltModel.findById(payload.slotId)
    
    try {
        session.startTransaction()

        if (getSlot?.isBooked === 'booked') {
            throw {
                statusCode: 400,
                message: 'this slot alredy'
            }
        }
        
        payload.customerId = userId
        const booking = await bookingModel.create([payload], { new: true, session: session })
        await soltModel.findByIdAndUpdate(payload.slotId, { isBooked: 'booked' }, { new: true, session })


        await session.commitTransaction()
        await session.endSession()
        return booking

    } catch (err: any) {
        await session.abortTransaction()
        await session.endSession()
        throw new Error(err)
    }

    
}



export const getAllookingService = async () => {
    const booking = await bookingModel.find().populate({ path: 'customerId' }).populate('serviceId').populate('slotId').select('vehicleBrand manufacturingYear')
    return booking
}



export const getSingleBookingService = async (id: Types.ObjectId) => {
    const finduserBooking = await bookingModel.find({ customerId: id }).populate('serviceId').populate('slotId')
    return finduserBooking
}