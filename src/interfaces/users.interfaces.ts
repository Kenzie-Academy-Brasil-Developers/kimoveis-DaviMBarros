import { z } from "zod";
import { usersCreateSchema, usersReadSchema, usersReturnSchema, usersUpdateOmitSchema } from "../schemas";
import { User } from "../entities";
import { DeepPartial, Repository } from "typeorm";

type UsersCreate = z.infer<typeof usersCreateSchema>
type UsersRead = z.infer<typeof usersReadSchema>
type UsersUpdateOmit = z.infer<typeof usersUpdateOmitSchema>
type UsersUpdate = DeepPartial<UsersUpdateOmit>
type UsersRepository = Repository<User>
type UsersReturn = z.infer<typeof usersReturnSchema>

export { UsersCreate, UsersRead, UsersUpdate, UsersRepository, UsersReturn}