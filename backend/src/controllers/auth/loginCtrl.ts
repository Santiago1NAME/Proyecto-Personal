import { Request, Response } from "express";
import {  login } from "../../services/auth/auth";
import { verifyTokenUser } from "../../middleware/session";

const loginCtrl = async ({ body }: Request, res: Response) =>{
    const { email, password } = body;
    const respon = await login({ email, password });
    let estatusCode = 200;
    let message = {};
    if (respon === 'Usuario no encontrado') {
        estatusCode = 401;
        message = {
            status: 'error',
            message: 'Usuario no encontrado',
        };
    } else if (respon === 'Contraseña incorrecta') {
        estatusCode = 401;
        message = {
            status: 'error',
            message: 'Contraseña incorrecta',
        };
    } else {
        message = {
            status: 'success',
            message: 'Usuario encontrado con éxito',
            data: respon
        };
    }
    res.status(estatusCode).json(message);
}

const validTokenCtrl = async (req: Request, res: Response) => {
    await verifyTokenUser(req, res);
}

export { loginCtrl, validTokenCtrl };