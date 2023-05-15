import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Category } from "../../entities";
import { CategoriesReturnAll, UsersReturnAll } from "../../interfaces";
import { returnAllCategoriesSchema, returnAllUserSchema } from "../../schema";

const listCategoriesService = async (): Promise<CategoriesReturnAll> => {
  const categoriesRepository: Repository<Category> =
    AppDataSource.getRepository(Category);

  const findUsers = await categoriesRepository.find();

  const allUser = returnAllCategoriesSchema.parse(findUsers);

  return allUser;
};

export { listCategoriesService };
