import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Category } from "../../entities";

const listRealEstateCategoriesService = async (idCategory: number) => {
  const categoriesRepository: Repository<Category> =
    AppDataSource.getRepository(Category);

  const findCategory = await categoriesRepository.findOne({
    relations: {
      realEstate: true,
    },
    where: {
      id: idCategory,
    },
  });

  return findCategory;
};

export { listRealEstateCategoriesService };
