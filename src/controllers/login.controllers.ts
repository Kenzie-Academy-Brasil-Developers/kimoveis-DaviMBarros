import { Request, Response } from "express";
import { LoginReturn } from "../interfaces/login.interfaces";
import { loginServices } from "../services";

const create = async (req: Request, res: Response): Promise<Response> => {
    const token: LoginReturn = await loginServices.createLogin(req.body)

    return res.status(200).json(token)
}

export default { create }