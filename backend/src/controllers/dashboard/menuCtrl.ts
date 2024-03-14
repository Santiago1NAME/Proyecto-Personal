import { Request, Response } from "express";
import {  lstMenu } from "../../services/dashboard/menu";
import { handleHttp } from "../../utils/error.handle";

const lstCtrl = async (req: Request, res: Response) =>{
  try{
    let respon = await lstMenu();
    if(!respon){
      res.status(400).json({
        status: 'error',
        message: 'No hay opciones en el menu'
      });
    }else{
      res.status(200).json({
        status: 'success',
        message: 'Opciones encontrados',
        data: respon
      });
    }
  }catch(e){
    handleHttp(res, 'ERROR_GET_ITEMS', e);
  }
}


export { lstCtrl };