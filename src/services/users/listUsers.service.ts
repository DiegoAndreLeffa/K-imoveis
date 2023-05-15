import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { UsersReturnAll } from "../../interfaces";
import { returnAllUserSchema } from "../../schema";

const listUserService = async (): Promise<UsersReturnAll> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const findUsers = await userRepository.find();

  const allUser = returnAllUserSchema.parse(findUsers);

  return allUser;
};

export { listUserService };
