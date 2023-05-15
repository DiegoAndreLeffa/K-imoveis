import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Category } from "../../entities";
import { Categories, CategoriesReturn } from "../../interfaces";
import { returnCategoriesSchema } from "../../schema";

const createCategoriesService = async (
  categoryData: Categories
): Promise<CategoriesReturn> => {
  const categoriesRepository: Repository<Category> =
    AppDataSource.getRepository(Category);

  const categories = categoriesRepository.create(categoryData);

  await categoriesRepository.save(categories);

  const newCategories = returnCategoriesSchema.parse(categories);

  return newCategories;
};

export { createCategoriesService };
