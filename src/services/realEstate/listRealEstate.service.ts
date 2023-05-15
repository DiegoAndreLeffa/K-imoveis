import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { RealEstate } from "../../entities";
import { RealEstateReturnAll } from "../../interfaces";
import { returnAllRealEstateSchema } from "../../schema";

const listRealEstateService = async (): Promise<RealEstateReturnAll> => {
  const realEstateRepository: Repository<RealEstate> =
    AppDataSource.getRepository(RealEstate);

  const findUser = await realEstateRepository.find({
    relations: {
      address: true,
    },
  });

  const returnAllRealEstate = returnAllRealEstateSchema.parse(findUser);

  return returnAllRealEstate;
};

export { listRealEstateService };
