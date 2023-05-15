import { Request, Response, NextFunction } from "express";
import { AppError } from "../../errors";

const veryfyTokenIdEqualIdUser = async (
  request: Request,
  response: Response,
  next: NextFunction
): Promise<Response | void> => {
  const authorizationUser = request.user;

  const idToken: number = request.user.id;
  const idUser: number = parseInt(request.params.id);

  if (authorizationUser.admin !== true && idToken !== idUser) {
    throw new AppError("Insufficient permission", 403);
  }

  return next();
};

export { veryfyTokenIdEqualIdUser };
