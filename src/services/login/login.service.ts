import { compare } from "bcryptjs";
import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { AppError } from "../../errors";
import { Login } from "../../interfaces";
import jwt from "jsonwebtoken";
import "dotenv/config";

const createLoginService = async (loginData: Login): Promise<string> => {
  const userRepository: Repository<User> = AppDataSource.getRepository(User);

  const userEmail: string = loginData.email;

  const findEmail = await userRepository.findOne({
    where: {
      email: userEmail,
    },
  });

  if (!findEmail) {
    throw new AppError("Invalid credentials", 401);
  }

  const matchPass: boolean = await compare(
    loginData.password,
    findEmail.password
  );

  if (!matchPass) {
    throw new AppError("Invalid credentials", 401);
  }

  const token: string = jwt.sign(
    {
      admin: findEmail.admin,
    },
    process.env.SECRET_KEY!,
    {
      expiresIn: process.env.EXPIRES_IN,
      subject: findEmail.id.toString(),
    }
  );

  return token;
};

export { createLoginService };
