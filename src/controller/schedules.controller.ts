import { Request, Response } from "express";
import { createSchedulesService, listSchedulesService } from "../services";

const createSchedulesController = async (
  request: Request,
  response: Response
) => {
  const idUser = request.user.id;
  const schedulesData = request.body;

  const newSchedules = await createSchedulesService(schedulesData, idUser);

  return response.status(201).json({ message: "Schedule created" });
};

const listSchedulesController = async (
  request: Request,
  response: Response
) => {
  const id = parseInt(request.params.id);

  const listSchedules = await listSchedulesService(id);

  return response.status(200).json(listSchedules);
};

export { createSchedulesController, listSchedulesController };
