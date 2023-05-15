import "express-async-errors";
import express, { Application } from "express";
import { handleErrors } from "./errors";
import {
  categoriesRouter,
  loginRouter,
  realEstateRouter,
  schedulesRouter,
  userRouter,
} from "./routers";

const app: Application = express();
app.use(express.json());

app.use("/users", userRouter);
app.use("/login", loginRouter);
app.use("/categories", categoriesRouter);
app.use("/realEstate", realEstateRouter);
app.use("/schedules", schedulesRouter);

app.use(handleErrors);

export default app;
