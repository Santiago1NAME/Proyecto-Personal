import { Auth } from "../../interfaces/auth.interfaces";
import UserModel from '../../models/user';
import { verified } from "../../utils/bcrypt.handle";
import { generateToken } from "../../utils/jwt.handle";

const login = async ({ email, password }: Auth) => {
    const checkIs = await UserModel.findOne({ email });
    if(!checkIs) return 'Usuario no encontrado';

    const passwordHas = checkIs.password;
    const isCorrect = await verified(password, passwordHas);

    if(!isCorrect) return 'Contraseña incorrecta';

    const token = generateToken(checkIs.email);
    const data = {
        token,
        user: checkIs
    };

    return data;
};

export { login };