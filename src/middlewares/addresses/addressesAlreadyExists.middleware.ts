import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Address } from "../../entities";
import { AppError } from "../../errors";
import { createRealEstateSchema } from "../../schema";

const addressesAlreadyExistisMiddleware = async (
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> => {
  const addressRepository: Repository<Address> =
    AppDataSource.getRepository(Address);

  const address = request.body.address.zipCode;

  const findAddress = await addressRepository.findOne({
    where: {
      zipCode: address,
    },
  });

  if (findAddress?.zipCode === address) {
    throw new AppError("Address already exists", 409);
  }

  return next();
};

export { addressesAlreadyExistisMiddleware };
