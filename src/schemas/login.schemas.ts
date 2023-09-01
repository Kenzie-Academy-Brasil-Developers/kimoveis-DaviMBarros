import { usersSchema } from "./users.schemas";

const loginSchema = usersSchema.pick({
    email: true,
    password: true
})

export { loginSchema }