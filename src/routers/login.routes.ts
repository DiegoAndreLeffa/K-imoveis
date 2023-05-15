import { Router } from "express";
import { loginController } from "../controller";
import { validatedData } from "../middlewares";
import { createLoginSchema } from "../schema";

const loginRouter: Router = Router();

loginRouter.post("", validatedData(createLoginSchema), loginController);

export { loginRouter };
