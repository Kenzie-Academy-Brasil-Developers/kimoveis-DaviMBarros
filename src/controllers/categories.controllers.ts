import { Request, Response } from "express";
import { categoriesServices } from "../services";

const create = async (req: Request, res: Response): Promise<Response> => {
    const category = await categoriesServices.createCategorie(req.body)

    return res.status(201).json(category)
}

const read = async (req: Request, res: Response): Promise<Response> => {
    const category = await categoriesServices.readCategories()

    return res.status(200).json(category)
}

const readById = async (req: Request, res: Response): Promise<Response> => {
    const category = await categoriesServices.readRealEstatesByCategorie(Number(req.params.id))

    return res.status(200).json(category)
}

export default { create, read, readById}