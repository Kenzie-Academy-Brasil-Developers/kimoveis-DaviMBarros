import { RealEstate } from "../entities"
import { RealEstatesCreate } from "../interfaces"
import { addressRepository, categoriesRepository, realEstateRepository } from "../repositories"

const createRealEstates = async (payload: RealEstatesCreate): Promise<RealEstate> => {
    const category = await categoriesRepository.findOne({ where: { id: payload.categoryId } })

    const addressTable = await addressRepository.save(payload.address)

    const { id } = await realEstateRepository.save({ ...payload, address: addressTable, category: category! })

    const realEstate = await realEstateRepository.findOne({ where: { id: id }, relations: { category: true, address: true } })

    return realEstate!
}

const readRealEstates = async (): Promise<RealEstate[]> => {
    const realEstate: RealEstate[] = await realEstateRepository.find({ relations: { address: true }})

    return realEstate
}

export default { createRealEstates, readRealEstates }