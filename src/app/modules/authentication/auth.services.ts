import envData from "../../config/config";
import { Tuser } from "../user/user.interface";
import userModel from "../user/user.model";
import jwt from 'jsonwebtoken';
export const authService = async (payload: Partial<Tuser>) => {
    const checkuserExistancy = await userModel.findOne({ email: payload.email })

    if (!checkuserExistancy) {
        throw new Error('this user is not exist')
    }
    if (checkuserExistancy?.isDeleted) {
        throw new Error('forbidden user')
    }

    const genarateAccessToken = jwt.sign(payload, envData.secret_key as string, { expiresIn: '2h' })

    return { checkuserExistancy, genarateAccessToken }

}