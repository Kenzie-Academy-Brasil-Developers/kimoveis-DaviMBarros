import { NextFunction, Request, Response } from "express";
import { Category } from "../entities";
import { categoriesRepository } from "../repositories";
import { AppError } from "../errors";

const verifyNameExist = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const { name } = req.body

    if(!name) {
        return next()
    }

    const categorie: Category | null = await categoriesRepository.findOne({ where: { name: name } })

    if(categorie) {
        throw new AppError("Category already exists", 409)
    }

    return next()
}

export { verifyNameExist }