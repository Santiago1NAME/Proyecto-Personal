import { Request, Response, Router } from "express";
import { loginCtrl, validTokenCtrl } from "../controllers/auth/loginCtrl";


const router = Router();

router.post('/login', loginCtrl);
router.get('/validate-token', validTokenCtrl);

export { router };