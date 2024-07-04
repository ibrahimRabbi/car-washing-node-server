import { Tuser } from "./user.interface";
import userModel from "./user.model";

export const userSignupService = async (payload: Tuser) => {
    const insertingDb = await userModel.create(payload)
    return insertingDb
}