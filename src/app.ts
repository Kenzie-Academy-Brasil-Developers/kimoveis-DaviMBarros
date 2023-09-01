import 'express-async-errors';
import 'reflect-metadata';
import express from 'express';
import middlewares from './middlewares';
import { categoriesRoutes, loginRoutes, realEstatesRoutes, schedulesRoutes, usersRoutes } from './routes';

const app = express();
app.use(express.json());

app.use("/users", usersRoutes)
app.use("/login", loginRoutes)
app.use("/categories", categoriesRoutes)
app.use("/realEstate", realEstatesRoutes)
app.use("/schedules", schedulesRoutes)

app.use(middlewares.handleErrors)

export default app;