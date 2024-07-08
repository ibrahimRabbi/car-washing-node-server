import { Types } from "mongoose";
import Tbooking from "./booking.interface";
import { bookingModel } from "./booking.model";

export const createBookingService = async (payload: Tbooking, userId: Types.ObjectId) => {
    payload.customerId = userId
    
    const booking = await bookingModel.create(payload)
    return booking
}



export const getAllookingService = async () => {
    const booking = await bookingModel.find().populate({ path: 'customerId' }).populate('serviceId').populate('slotId').select('vehicleBrand manufacturingYear')
    return booking
}



export const getSingleBookingService = async (id: Types.ObjectId) => {
    const finduserBooking = await bookingModel.find({ customerId: id }).populate('serviceId').populate('slotId')
    return finduserBooking
}