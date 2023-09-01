import { sign } from "jsonwebtoken"
import { LoginCreate, LoginReturn } from "../interfaces/login.interfaces"
import { usersRepository } from "../repositories"
import { User } from "../entities"
import { AppError } from "../errors"
import { compare } from "bcryptjs"

const createLogin = async ({ email, password }: LoginCreate): Promise<LoginReturn> => {
    const user: User | null = await usersRepository.findOneBy({ email })

    if(!user) {
        throw new AppError("Invalid credentials", 401)
    }

    const samePassword: boolean =  await compare(password, user.password)
    
    if(!samePassword) {
        throw new AppError("Invalid credentials", 401)
    }

    const token: string = sign(
        { admin: user.admin },
        process.env.SECRET_KEY!,
        { subject: user.id.toString(), expiresIn: process.env.EXPIRES_IN!}
    )
    return { token }
}

export default { createLogin }