import envData from "../../config/config";
import { Tuser } from "../user/user.interface";
import userModel from "../user/user.model";
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt'



export const authService = async (payload: Partial<Tuser>) => {

    const checkuserExistancy = await userModel.findOne({ email: payload.email })

    console.log(checkuserExistancy)


    if (checkuserExistancy?.password) {
        const unpackPass = await bcrypt.compare(payload.password as string, checkuserExistancy?.password as string)

        if (!unpackPass) {
            throw {
                statusCode: 401,
                message: 'invalid password'
            }
        }
    }

    if (!checkuserExistancy) {
        throw {
            statusCode: 404,
            message: 'user is not exist'
        }
    }

    if (checkuserExistancy?.isDeleted) {
        throw {
            statusCode: 403,
            message: 'forbbiden user'
        }
    }




    const genarateAccessToken = jwt.sign(payload, envData.secret_key as string, { expiresIn: '6h' })
    return { checkuserExistancy, accessToken: `Bearer ${genarateAccessToken}` }



}