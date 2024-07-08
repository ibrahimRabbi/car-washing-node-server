import { model, Schema } from "mongoose";
import Tbooking from "./booking.interface";


const bookingSchema = new Schema<Tbooking>({
    serviceId: { type: Schema.Types.ObjectId, ref: 'services', required: true },
    slotId: { type: Schema.Types.ObjectId, ref: 'timeSlot', required: true },
    customerId: { type: Schema.Types.ObjectId, ref: 'users', required: true, select: 0 },
    vehicleBrand: { type: String, required: true, trim: true },
    vehicleType: { type: String, enum: ['car', 'truck', 'SUV', 'van', 'motorcycle', 'bus', 'electricVehicle', 'hybridVehicle', 'bicycle', 'tractor'], required: true, trim: true },
    vehicleModel: { type: String, required: true, trim: true },
    manufacturingYear: { type: String, required: true, trim: true },
    registrationPlate: { type: String, required: true, trim: true },
}, { timestamps: true })

export const bookingModel = model<Tbooking>('booking', bookingSchema)