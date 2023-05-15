import { Router } from "express";
import {
  createCategoriesController,
  listCategoriesController,
  listRealEstateCategories,
} from "../controller";

import {
  categoriesAlreadyExistisMiddleware,
  categoryNotExistisMiddleware,
  validatedData,
  validatedIsAdmin,
  validatedTokenMiddleware,
} from "../middlewares";
import { createCategorySchema } from "../schema";

const categoriesRouter: Router = Router();

categoriesRouter.post(
  "",
  validatedTokenMiddleware,
  validatedIsAdmin,
  categoriesAlreadyExistisMiddleware,
  validatedData(createCategorySchema),
  createCategoriesController
);

categoriesRouter.get("", listCategoriesController);

categoriesRouter.get(
  "/:id/realEstate",
  categoryNotExistisMiddleware,
  listRealEstateCategories
);

export { categoriesRouter };
