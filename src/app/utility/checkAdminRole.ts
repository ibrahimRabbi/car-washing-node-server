import userModel from "../modules/user/user.model"


const checkAdminRole = async (email: string) => {
    const findUser = await userModel.findOne({ email: email })

    if (findUser?.role === 'user') {
        return false
    } else {
        return true
    }
}

export default checkAdminRole