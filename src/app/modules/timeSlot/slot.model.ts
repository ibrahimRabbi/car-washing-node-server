import { model, Schema } from "mongoose";
import { Tslot } from "./slot.interface";

const slotSchema = new Schema<Tslot>({
    service: { type: Schema.Types.ObjectId, ref: 'services', required: true },
    date: { type: Date, required: true },
    startTime: { type: String, required: true, trim: true },
    endTime: { type: String, required: true, trim: true },
    isBooked: { type: Boolean, default: true }
})

export const soltModel = model<Tslot>('timeSlot', slotSchema)