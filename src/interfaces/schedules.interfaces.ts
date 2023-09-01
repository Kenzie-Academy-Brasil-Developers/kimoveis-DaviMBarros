import { z } from "zod";
import { scheduleReadSchema, schedulesCreateSchema, schedulesSchema } from "../schemas";
import { Repository } from "typeorm";
import { Schedule } from "../entities";

type SchedulesCreate = z.infer<typeof schedulesCreateSchema>
type SchedulesRead = z.infer<typeof scheduleReadSchema>
type SchedulesReturn = z.infer<typeof schedulesSchema>
type SchedulesRepository = Repository<Schedule>

export { SchedulesCreate, SchedulesRead, SchedulesReturn, SchedulesRepository }