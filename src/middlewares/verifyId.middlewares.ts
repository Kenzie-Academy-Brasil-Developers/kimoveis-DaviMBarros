import { NextFunction, Request, Response } from "express";
import { usersRepository } from "../repositories";
import { User } from "../entities";
import { AppError } from "../errors";

const verifyId = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const user: User | null = await usersRepository.findOne({ where: { id: Number(req.params.id) }})

    if(!user) {
        throw new AppError("User not found", 404)
    }

    res.locals = { ...res.locals, user}

    return next()
}

export { verifyId }