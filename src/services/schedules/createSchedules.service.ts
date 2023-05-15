import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { RealEstate, Schedule, User } from "../../entities";
import { SchedulesCreate } from "../../interfaces";

const createSchedulesService = async (
  schedulesData: SchedulesCreate,
  idUser: number
) => {
  const schedulesRepository: Repository<Schedule> =
    AppDataSource.getRepository(Schedule);

  const realEstateRepository: Repository<RealEstate> =
    AppDataSource.getRepository(RealEstate);

  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const findRealEstate = await realEstateRepository.findOne({
    where: {
      id: schedulesData.realEstateId!,
    },
  });

  const findUser = await userRepository.findOneBy({
    id: idUser,
  });

  const newSchedules = schedulesRepository.create({
    ...schedulesData,
    realEstate: findRealEstate!,
    user: findUser!,
  });

  await schedulesRepository.save(newSchedules);

  return newSchedules;
};

export { createSchedulesService };
