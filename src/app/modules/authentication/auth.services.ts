import envData from "../../config/config";
import { Tuser } from "../user/user.interface";
import userModel from "../user/user.model";
import jwt from 'jsonwebtoken';
import bycrpt from 'bcrypt'

export const authService = async (payload: Partial<Tuser>) => {

    try {
        const checkuserExistancy = await userModel.findOne({ email: payload.email })
        const unpackPassword = await bycrpt.compare(payload.password as string, checkuserExistancy?.password as string)

        if (!unpackPassword) {
            throw new Error('password is wrong')
        }

        if (!checkuserExistancy) {
            throw new Error('this user is not exist')
        }

        if (checkuserExistancy?.isDeleted) {
            throw new Error('forbidden user')
        }

        const genarateAccessToken = jwt.sign(payload, envData.secret_key as string, { expiresIn: '2h' })
        return { checkuserExistancy, genarateAccessToken }

    } catch (err: any) {
        throw new Error(err)
    }


}