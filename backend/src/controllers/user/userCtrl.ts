import { Request, Response } from "express";
import {  lstUsers, registerNewUser } from "../../services/auth/user/user";
import { handleHttp } from "../../utils/error.handle";

const lstCtrl = async (req: Request, res: Response) =>{
  try{
    const { page, limit } = req.query;
    const paginate = {
      page: page ? page : 1,
      limit: limit ? limit : 5,
    }

    let respon = await lstUsers(paginate);
    if(!respon){
      res.status(400).json({
        status: 'error',
        message: 'No hay usuarios'
      });
    }else{
      res.status(200).json({
        status: 'success',
        message: 'Usuarios encontrados',
        data: respon
      });
    }
  }catch(e){
    handleHttp(res, 'ERROR_GET_ITEMS', e);
  }
}

const registerCtrl = async ({ body }: Request, res: Response) => {
  try {
    let respon = await registerNewUser(body);
    if(respon === 'El usuario ya existe'){
      res.status(409).json({
        status: 'error',
        message: 'El usuario ya existe'
      });
    }else{
      res.status(200).json({
        status: 'success',
        message: 'Usuario registrado correctamente',
        data: respon
      });
    }

  } catch (e) {
    handleHttp(res, 'ERROR_GET_ITEMS', e);
  }
};

export { lstCtrl, registerCtrl };