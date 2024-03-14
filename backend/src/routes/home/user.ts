import { Request, Response, Router } from "express";
import { lstCtrl, registerCtrl } from "../../controllers/user/userCtrl";
import { checkJwt } from "../../middleware/session";


const router = Router();

//Uso con middleware para validar acceso
router.get('/', checkJwt, lstCtrl);
router.post('/register', registerCtrl);

export { router };