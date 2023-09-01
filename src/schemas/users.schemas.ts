import { z } from "zod";

const usersSchema = z.object({
    id: z.number().positive(),
    name: z.string().max(45),
    email: z.string().email().max(45),
    admin: z.boolean().default(false),
    password: z.string().max(120),
    createdAt: z.string(),
    updatedAt: z.string(),
    deletedAt: z.string().nullable()
})

const usersCreateSchema = usersSchema.omit({ id: true, createdAt: true, updatedAt: true, deletedAt: true })
const usersReturnSchema = usersSchema.omit({ password: true })
const usersReadSchema = usersReturnSchema.array()
const usersUpdateOmitSchema = usersCreateSchema.omit({ admin: true })
const usersUpdateSchema = usersUpdateOmitSchema.partial()

export { usersSchema, usersCreateSchema, usersReturnSchema, usersReadSchema, usersUpdateSchema, usersUpdateOmitSchema }