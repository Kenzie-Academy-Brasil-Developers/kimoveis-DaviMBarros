import { Router } from "express";
import middlewares from "../middlewares";
import { realEstatesControllers } from "../controllers";
import { validateBody } from "../middlewares/validateBody.middlewares";
import { realEstatesCreateSchema } from "../schemas";

const realEstatesRoutes: Router = Router()

realEstatesRoutes.post("", middlewares.verifyToken, middlewares.verifyPermission, validateBody(realEstatesCreateSchema), middlewares.verifyAddress, realEstatesControllers.create)
realEstatesRoutes.get("", realEstatesControllers.read)

export default realEstatesRoutes