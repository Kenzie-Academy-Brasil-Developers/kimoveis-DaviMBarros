import { Router } from "express";
import middlewares from "../middlewares";
import { scheculesControllers } from "../controllers";
import { schedulesCreateSchema } from "../schemas";

const schedulesRoutes: Router = Router()

schedulesRoutes.post("", middlewares.verifyToken, middlewares.validateBody(schedulesCreateSchema), middlewares.verifyIdRealEstate, middlewares.verifyUserBySchedule, middlewares.verifyScheduleByRealEstates, middlewares.verifyBusinessHours, middlewares.verifyWorkingDays, scheculesControllers.create)
schedulesRoutes.get("/realEstate/:id", middlewares.verifyToken, middlewares.verifyAdmin, middlewares.verifyIdRealEstate, scheculesControllers.read)

export default schedulesRoutes