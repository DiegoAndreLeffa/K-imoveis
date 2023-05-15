import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { RealEstate } from "../../entities";
import { AppError } from "../../errors";

const isUserToken = async (
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> => {
  const realEstateRepository: Repository<RealEstate> =
    AppDataSource.getRepository(RealEstate);

  const realEstateId: number = parseInt(request.params.id);

  const findRealEstate = await realEstateRepository.findOne({
    where: {
      id: realEstateId,
    },
  });

  if (!findRealEstate) {
    throw new AppError("RealEstate not found", 404);
  }

  return next();
};

export { isUserToken };
