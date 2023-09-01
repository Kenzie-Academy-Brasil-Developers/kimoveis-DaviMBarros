import { z } from "zod";

const schedulesSchema = z.object({
    id: z.number().positive(),
    date: z.string(),
    hour: z.string(),
    realEstateId: z.number().int().positive(),
    userId: z.string()
})

const schedulesCreateSchema = schedulesSchema.omit({ id: true, userId: true })
const scheduleReadSchema = schedulesCreateSchema.array()

export { schedulesSchema, schedulesCreateSchema, scheduleReadSchema }