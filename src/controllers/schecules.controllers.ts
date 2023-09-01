import { Request, Response } from "express";
import { schedulesSevices } from "../services";

const create = async (req: Request, res: Response): Promise<Response> => {
    const { sub } = res.locals.decoded

    await schedulesSevices.createSchedules(req.body, sub)

    return res.status(201).json({ message: "Schedule created" })
}

const read = async (req: Request, res: Response): Promise<Response> => {
    const schedule = await schedulesSevices.readRealEstatesBySchedules(Number(req.params.id))

    return res.status(200).json(schedule)
}

export default { create, read }