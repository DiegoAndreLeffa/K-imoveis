import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { RealEstate, Schedule } from "../../entities";

const listSchedulesService = async (id: number) => {
  const realEstateRepository: Repository<RealEstate> =
    AppDataSource.getRepository(RealEstate);

  const schedulesRepository: Repository<Schedule> =
    AppDataSource.getRepository(Schedule);

  const findRealEstate = await realEstateRepository
    .createQueryBuilder("realEstate")
    .leftJoinAndSelect("realEstate.address", "address")
    .leftJoinAndSelect("realEstate.category", "category")
    .leftJoinAndSelect("realEstate.schedules", "schedules")
    .leftJoinAndSelect("schedules.user", "user")
    .where("realEstate.id = :id", { id })
    .getOne();

  return findRealEstate;
};

export { listSchedulesService };
