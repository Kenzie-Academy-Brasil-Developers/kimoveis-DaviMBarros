import { Router } from "express";
import middlewares from "../middlewares";
import { categoriesCreateSchema } from "../schemas";
import { categoriesControllers } from "../controllers";

const categoriesRoutes: Router = Router()

categoriesRoutes.post("", middlewares.validateBody(categoriesCreateSchema), middlewares.verifyToken, middlewares.verifyPermission, middlewares.verifyNameExist, categoriesControllers.create)
categoriesRoutes.get("", categoriesControllers.read)
categoriesRoutes.get("/:id/realEstate", categoriesControllers.readById)

export default categoriesRoutes