import { SchedulesCreate } from "../interfaces"
import { realEstateRepository, schedulesRepository, usersRepository } from "../repositories"

const createSchedules = async (payload: SchedulesCreate, userId: number): Promise<void> => {
    const realEstate = await realEstateRepository.findOne({
        where: { id: payload.realEstateId }
    })

    const user = await usersRepository.findOne({ where: { id: userId }})
    
    await schedulesRepository.save({ ...payload, realEstate: realEstate!, user: user! })
}

const readRealEstatesBySchedules = async (realEstateId: number): Promise<any> => {
    const schedules = await realEstateRepository.findOne({ where: { id: realEstateId }, relations: { address: true, category: true, schedules: { user: true } } })

    return schedules
}

export default { createSchedules, readRealEstatesBySchedules }