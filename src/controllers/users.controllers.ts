import { Request, Response } from "express";
import { usersServices } from "../services";
import { UsersReturn } from "../interfaces";
import { User } from "../entities";

const create = async (req: Request, res: Response): Promise<Response> => {
    const user: UsersReturn = await usersServices.createUser(req.body)

    return res.status(201).json(user)
}

const read = async (req: Request, res: Response): Promise<Response> => {
    const user = await usersServices.readUser()

    return res.status(200).json(user)
}

const update = async (req: Request, res: Response): Promise<Response> => {
    const { user } = res.locals
    const { body } = req
    
    const users = await usersServices.updateUserById(user, body)

    return res.status(200).json(users)
}

const deleteUser = async (req: Request, res: Response): Promise<Response> => {
    await usersServices.deleteUserById(res.locals.user)

    return res.status(204).json()
}

export default { create, read, update, deleteUser }