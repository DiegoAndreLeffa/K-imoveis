import { Router } from "express";
import {
  createUserController,
  deleteUserController,
  listUserController,
  updateUserController,
} from "../controller";
import {
  emailAlreadyExistisMiddleware,
  userNotExistisMiddleware,
  validatedData,
  validatedIsAdmin,
  validatedTokenMiddleware,
  veryfyTokenIdEqualIdUser,
} from "../middlewares";

import { createUserSchema, patchUserSchema } from "../schema";

const userRouter: Router = Router();

userRouter.post(
  "",
  validatedData(createUserSchema),
  emailAlreadyExistisMiddleware,
  createUserController
);

userRouter.get(
  "",
  validatedTokenMiddleware,
  validatedIsAdmin,
  listUserController
);

userRouter.patch(
  "/:id",
  validatedTokenMiddleware,
  userNotExistisMiddleware,
  veryfyTokenIdEqualIdUser,
  validatedData(patchUserSchema),
  updateUserController
);

userRouter.delete(
  "/:id",
  validatedTokenMiddleware,
  userNotExistisMiddleware,
  validatedIsAdmin,
  deleteUserController
);

export { userRouter };
