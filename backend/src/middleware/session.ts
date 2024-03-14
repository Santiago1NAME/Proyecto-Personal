import { NextFunction, Request, Response } from "express";
import { verifyToken } from "../utils/jwt.handle";

const checkJwt = (req: Request, res: Response, next: NextFunction) => {
    try {
        const jwtToken = req.headers.authorization || null;
        const jwt = jwtToken?.split(' ').pop();
        const isUser = verifyToken(`${ jwt }`);
        if(isUser) {
            next();
        }
    } catch (e) {
        res.status(400).json({
            status: "error",
            message: "Usted no cuenta con el acceso necesario"
        });
    }
}

const verifyTokenUser = (req: Request, res: Response) => {
    try {
        const jwtToken = req.headers.authorization || null;
        const jwt = jwtToken?.split(' ').pop();
        const isUser = verifyToken(`${ jwt }`);
        if(isUser) {
            res.status(200).json({
                status: "success",
                message: "Token validado"
            });
        }
    } catch (e) {
        res.status(400).json({
            status: "error",
            message: "Token no valido"
        });
    }
}

export { checkJwt, verifyTokenUser };