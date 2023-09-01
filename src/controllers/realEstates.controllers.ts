import { Request, Response } from "express";
import { realEstatesServices } from "../services";

const create = async (req: Request, res: Response): Promise<Response> => {
    const realEstate = await realEstatesServices.createRealEstates(req.body)

    return res.status(201).json(realEstate)
}

const read = async (req: Request, res: Response): Promise<Response> => {
    const realEstate = await realEstatesServices.readRealEstates()

    return res.status(200).json(realEstate)
}

export default { create, read }