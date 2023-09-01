import { User } from "../entities"
import { UsersCreate, UsersReturn, UsersUpdate } from "../interfaces"
import { usersRepository } from "../repositories"
import { usersReadSchema, usersReturnSchema } from "../schemas"

const createUser = async (payload: UsersCreate): Promise<UsersReturn> => {
    const user: User = usersRepository.create(payload)
    await usersRepository.save(user)

    return usersReturnSchema.parse(user)
}

const readUser = async (): Promise<UsersReturn[]> => {
    const user: User[] = await usersRepository.find()

    return usersReadSchema.parse(user)
}

const updateUserById = async (user: User, payload: UsersUpdate): Promise<UsersReturn> => {
    const userUpdate = await usersRepository.save({ ...user, ...payload })

    return usersReturnSchema.parse(userUpdate)
}

const deleteUserById = async (user: User): Promise<any> => {
    await usersRepository.softRemove(user)
}

export default { createUser, readUser, updateUserById, deleteUserById }