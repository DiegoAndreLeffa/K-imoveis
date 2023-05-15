import { NextFunction, Request, Response } from "express";
import { AppError } from "../../errors";

const dayNotWorkEndHours = async (
  request: Request,
  response: Response,
  next: NextFunction
): Promise<void> => {
  const dateRequest = request.body.date;
  const hourRequest = request.body.hour;

  const date: Date = new Date(dateRequest);
  const SegFri = date.getDay();

  const copyHour = hourRequest;
  const hours = copyHour.slice(0, 2);

  if (SegFri === 0 || SegFri === 6) {
    throw new AppError("Invalid date, work days are monday to friday", 400);
  }

  if (hours < 8 || hours > 18) {
    throw new AppError("Invalid hour, available times are 8AM to 18PM", 400);
  }
  return next();
};

export { dayNotWorkEndHours };
