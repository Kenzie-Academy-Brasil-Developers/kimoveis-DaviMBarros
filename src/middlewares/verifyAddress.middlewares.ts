import { NextFunction, Request, Response } from "express";
import { Address } from "../entities";
import { addressRepository } from "../repositories";
import { AppError } from "../errors";

const verifyAddress = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const { address } = req.body

    if(!address) {
        return next()
    }

    const uniqueAddress: Address | null = await addressRepository.findOne({ where: {  street: address.street, zipCode: address.zipCode, number: address.number, city: address.city, state: address.state } })

    if(uniqueAddress) {
        throw new AppError("Address already exists", 409)
    }

    return next()
}

export { verifyAddress }