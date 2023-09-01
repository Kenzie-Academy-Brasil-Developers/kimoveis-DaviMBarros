import { Router } from "express";
import middlewares from "../middlewares";
import { usersControllers } from "../controllers";
import { usersCreateSchema, usersUpdateSchema } from "../schemas";

const usersRoutes: Router = Router()

usersRoutes.post("", middlewares.validateBody(usersCreateSchema), middlewares.uniqueEmail, usersControllers.create)
usersRoutes.get("", middlewares.verifyToken, middlewares.verifyPermission, usersControllers.read)
usersRoutes.patch("/:id", middlewares.validateBody(usersUpdateSchema), middlewares.verifyId, middlewares.verifyToken, middlewares.verifyPermission, usersControllers.update)
usersRoutes.delete("/:id", middlewares.verifyId, middlewares.verifyToken, middlewares.verifyPermission, usersControllers.deleteUser)

export default usersRoutes