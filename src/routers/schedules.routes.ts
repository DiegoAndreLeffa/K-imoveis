import { Router } from "express";
import {
  createSchedulesController,
  listSchedulesController,
} from "../controller";
import {
  dayNotWorkEndHours,
  isUserToken,
  realEstateNotExistisMiddleware,
  schedulesAlreadyExistisMiddleware,
  validatedData,
  validatedIsAdmin,
  validatedTokenMiddleware,
} from "../middlewares";
import { createSchedules } from "../schema";

const schedulesRouter: Router = Router();

schedulesRouter.post(
  "",
  validatedTokenMiddleware,
  validatedData(createSchedules),
  schedulesAlreadyExistisMiddleware,
  realEstateNotExistisMiddleware,
  dayNotWorkEndHours,
  createSchedulesController
);

schedulesRouter.get(
  "/realEstate/:id",
  validatedTokenMiddleware,
  validatedIsAdmin,
  isUserToken,
  listSchedulesController
);

export { schedulesRouter };
