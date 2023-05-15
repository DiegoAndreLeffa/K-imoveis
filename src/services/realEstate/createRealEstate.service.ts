import { Repository } from "typeorm";
import { TRealEstate, RealEstateReturn } from "../../interfaces";
import { Address, Category, RealEstate } from "../../entities";
import { AppDataSource } from "../../data-source";
import { returnRealEstateSchema } from "../../schema";

const createRealEstateService = async (
  realEstateData: TRealEstate
): Promise<RealEstateReturn> => {
  const realEstateRepository: Repository<RealEstate> =
    AppDataSource.getRepository(RealEstate);

  const addressRepository: Repository<Address> =
    AppDataSource.getRepository(Address);

  const categoriesRepository: Repository<Category> =
    AppDataSource.getRepository(Category);

  const findCategory = await categoriesRepository.findOne({
    where: {
      id: realEstateData.categoryId!,
    },
  });

  const newAddress = addressRepository.create({
    ...realEstateData.address,
  });
  await addressRepository.save(newAddress);

  const newRealEstate = realEstateRepository.create({
    ...realEstateData,
    address: newAddress,
    category: findCategory!,
  });

  await realEstateRepository.save(newRealEstate);

  const returnRealEstate = returnRealEstateSchema.parse(newRealEstate);

  return returnRealEstate;
};

export { createRealEstateService };
