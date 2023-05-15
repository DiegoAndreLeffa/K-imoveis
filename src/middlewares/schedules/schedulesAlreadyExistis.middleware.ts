import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../../data-source";
import { Schedule, User } from "../../entities";
import { AppError } from "../../errors";

const schedulesAlreadyExistisMiddleware = async (
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> => {
  const scheduleRepository: Repository<Schedule> =
    AppDataSource.getRepository(Schedule);

  const hour = request.body.hour;
  const realEstateId = request.body.realEstateId;

  const userId = request.user.id;

  const existSchedule = await scheduleRepository
    .createQueryBuilder("schedule")
    .where("schedule.hour = :hour", { hour })
    .andWhere("schedule.realEstate = :realEstateId", { realEstateId })
    .getOne();

  const existUserSchedule = await scheduleRepository
    .createQueryBuilder("schedule")
    .where("schedule.hour = :hour", { hour })
    .andWhere("schedule.user = :userId", { userId })
    .getOne();

  if (existSchedule) {
    throw new AppError(
      "Schedule to this real estate at this date and time already exists",
      409
    );
  }
  if (existUserSchedule) {
    throw new AppError(
      "User schedule to this real estate at this date and time already exists",
      409
    );
  }

  return next();
};

export { schedulesAlreadyExistisMiddleware };
