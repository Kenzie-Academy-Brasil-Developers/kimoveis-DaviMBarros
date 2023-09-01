import { Router } from "express";
import { loginControllers } from "../controllers";

const loginRoutes: Router = Router()

loginRoutes.post("", loginControllers.create)

export default loginRoutes