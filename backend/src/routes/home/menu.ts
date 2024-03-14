import { Request, Response, Router } from "express";
import { lstCtrl } from "../../controllers/dashboard/menuCtrl";


const router = Router();

router.get('/', lstCtrl);

export { router };