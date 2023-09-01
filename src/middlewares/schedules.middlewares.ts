import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors";
import { RealEstate, Schedule } from "../entities";
import { realEstateRepository, schedulesRepository } from "../repositories";

const verifyIdRealEstate = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    let id = req.params.id

    if(!id) {
        id = req.body.realEstateId
    }

    const realEstate: RealEstate | null = await realEstateRepository.findOne({ where: { id: Number(id)} })

    if(!realEstate) {
        throw new AppError ("RealEstate not found", 404)
    }

    return next()
}

const verifyUserBySchedule = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const { sub } = res.locals.decoded

    const user: Schedule | null = await schedulesRepository.findOne({ where: { date: req.body.date, hour: req.body.hour, user: { id: sub } } })

    if(user) {
        throw new AppError("User schedule to this real estate at this date and time already exists", 409)
    }

    return next()
}

const verifyScheduleByRealEstates = async (req: Request, res: Response, next: NextFunction): Promise<void> => {

    const schedule: Schedule | null = await schedulesRepository.findOne({ where: { date: req.body.date, hour: req.body.hour, realEstate: { id: req.body.realEstateId } } })

    if(schedule) {
        throw new AppError("Schedule to this real estate at this date and time already exists", 409)
    }

    return next()
}

const verifyBusinessHours = (req: Request, res: Response, next: NextFunction): void => {
    const hour: number = req.body.hour.substring(0,2)

    if(hour < 8 || hour > 18) {
        throw new AppError ("Invalid hour, available times are 8AM to 18PM", 400)
    }

    return next()
}

const verifyWorkingDays = (req: Request, res: Response, next: NextFunction): void => {
    const date: Date = new Date(req.body.date)
    const day: number = date.getDay()

    if(day == 0 || day == 6) {
        throw new AppError ("Invalid date, work days are monday to friday", 400)
    }

    return next()
}

// export { verifyUserBySchedule, verifyScheduleByRealEstates, verifyBusinessHours, verifyWorkingDays }
export { verifyBusinessHours, verifyWorkingDays, verifyIdRealEstate, verifyUserBySchedule, verifyScheduleByRealEstates}