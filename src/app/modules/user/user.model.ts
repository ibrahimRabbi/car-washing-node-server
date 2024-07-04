import { model, Schema } from "mongoose";
import { Tuser } from "./user.interface";

const userSchema = new Schema<Tuser>({
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, trim: true },
    password: { type: String, required: true, minlength: [6, 'password must be getter then 6 character'] },
    role: { type: String, required: true, enum: ["user", "admin"] },
    phone: { type: String, required: true, unique: true, maxlength: 11, trim: true },
    address: { type: String, required: true, trim: true },
    isDeleted: { type: Boolean, default:false}
},{timestamps:true})

const userModel = model('user', userSchema)

export default userModel