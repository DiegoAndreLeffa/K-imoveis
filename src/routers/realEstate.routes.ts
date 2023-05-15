import { Router } from "express";
import {
  createRealEstateController,
  listRealEstateController,
} from "../controller";
import {
  addressesAlreadyExistisMiddleware,
  validatedData,
  validatedIsAdmin,
  validatedTokenMiddleware,
} from "../middlewares";
import { createRealEstateSchema } from "../schema";

const realEstateRouter: Router = Router();

realEstateRouter.post(
  "",
  validatedTokenMiddleware,
  validatedIsAdmin,
  validatedData(createRealEstateSchema),
  addressesAlreadyExistisMiddleware,
  createRealEstateController
);

realEstateRouter.get("", listRealEstateController);

export { realEstateRouter };
