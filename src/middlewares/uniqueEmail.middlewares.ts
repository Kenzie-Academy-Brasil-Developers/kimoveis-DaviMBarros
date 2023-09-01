import { NextFunction, Request, Response } from "express";
import { User } from "../entities";
import { usersRepository } from "../repositories";
import { AppError } from "../errors";

const uniqueEmail = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const { email } = req.body

    if(!email) {
        return next()
    }

    const userEmail: User | null = await usersRepository.findOne({ where: { email: email }})

    if(userEmail) {
        throw new AppError("Email already exists", 409)
    }

    return next()
}

export { uniqueEmail }