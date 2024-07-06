import { Types } from "mongoose"

export type Tslot = {
    service: Types.ObjectId,
    date: Date,
    startTime: string,
    endTime: string,
    isBooked:boolean
}