import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors";

const validatedIsAdmin = async (
  request: Request,
  response: Response,
  next: NextFunction
) => {
  const authorizationUser = request.user;

  if (authorizationUser.admin !== true) {
    throw new AppError("Insufficient permission", 403);
  }

  return next();
};

export { validatedIsAdmin };
