import UserModel from '../../../models/user';
import { User } from '../../../interfaces/user.interfaces';
import { encrypt } from "../../../utils/bcrypt.handle";
import { generatePaginationInfo } from '../../../utils/paginationUtils';
import { faker } from '@faker-js/faker';

const lstUsers = async (paginate: any) => {
    const { page, limit } = paginate;
    const skip = (page - 1) * limit;

    const users = await UserModel.find({}).skip(skip).limit(limit);

    const totalUsers = await UserModel.countDocuments({});

    if (!users) {
        return false;
    }

    const paginationInfo = generatePaginationInfo(page, limit, users.length, totalUsers);

    return {
        users,
        pagination: paginationInfo
    };
};

const registerNewUser = async ({ email, password, name }: User) => {
    const checkIs = await UserModel.findOne({ email });
    if(checkIs) return "El usuario ya existe";
    const passHash = await encrypt(password);
    const registerNewUser = await UserModel.create({ email, password: passHash, name });
    return registerNewUser;
};

export { lstUsers, registerNewUser };