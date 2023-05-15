import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { UserReturnNotPassword, Users } from "../../interfaces";
import { returnUserSchemaNotPassword } from "../../schema";

const createUsersService = async (
  userData: Users
): Promise<UserReturnNotPassword> => {
  const usersRepository: Repository<User> = AppDataSource.getRepository(User);

  const user = usersRepository.create(userData);

  await usersRepository.save(user);

  const newUser = returnUserSchemaNotPassword.parse(user);

  return newUser;
};

export { createUsersService };
