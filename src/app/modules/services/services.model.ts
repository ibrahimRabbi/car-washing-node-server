import { model, Schema } from "mongoose";
import { Tservice } from "./services.interface";


const serviceSchema = new Schema<Tservice>({
    name: { type: String, maxlength:30, unique:true, required: true },
    description: { type: String, required: true, maxlength: 100 },
    price: { type: Number, required: true, trim: true },
    duration: { type: Number, required: true, trim: true },
    isdeleted: { type: Boolean, default: false }
})


// serviceSchema.pre('save', async function (next) {
//     const checkCurrentData = await serviceModel.findOne({
//         $and: [
//             { name: this.name },
//             { duration: this.duration }
//         ]
//     })

//     if (checkCurrentData) {
//         throw new Error(`400 this service already exist`)
//     }
//     next()
// })

export const serviceModel = model<Tservice>('services',serviceSchema)