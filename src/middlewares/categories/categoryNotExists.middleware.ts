import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Category } from "../../entities";
import { AppError } from "../../errors";

const categoryNotExistisMiddleware = async (
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> => {
  const categoriesRepository: Repository<Category> =
    AppDataSource.getRepository(Category);

  const categoryId = parseInt(request.params.id);

  const findCategory = await categoriesRepository.findOne({
    where: {
      id: categoryId,
    },
  });

  if (!findCategory) {
    throw new AppError("Category not found", 404);
  }

  return next();
};

export { categoryNotExistisMiddleware };
