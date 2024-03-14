import { Response } from "express";

const handleHttp = (res: Response, error: string, errorRaw?: any) => {
    res.status(500).send({ error, message: "No se encontro el elemento" });
}

export { handleHttp };