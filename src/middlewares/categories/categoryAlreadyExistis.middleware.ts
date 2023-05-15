import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Category } from "../../entities";
import { AppError } from "../../errors";

const categoriesAlreadyExistisMiddleware = async (
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> => {
  const categoriesRepository: Repository<Category> =
    AppDataSource.getRepository(Category);

  const categories = request.body.name;

  const findCategory = await categoriesRepository.findOne({
    where: {
      name: categories,
    },
  });

  if (findCategory?.name === categories) {
    throw new AppError("Category already exists", 409);
  }

  return next();
};

export { categoriesAlreadyExistisMiddleware };
