import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { Users, UserUpdate } from "../../interfaces";
import { returnUserSchemaNotPassword } from "../../schema";

const updateUserService = async (userData: UserUpdate, idUser: number) => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const oldUserData = await userRepository.findOne({
    where: {
      id: idUser,
    },
  });

  const user = userRepository.create({
    ...oldUserData,
    ...userData,
  });

  await userRepository.save(user);

  const updateUser = returnUserSchemaNotPassword.parse(user);

  return updateUser;
};

export { updateUserService };
