import { Request, Response } from "express";
import { TRealEstate } from "../interfaces";
import { createRealEstateService } from "../services";
import { listRealEstateService } from "../services/realEstate/listRealEstate.service";

const createRealEstateController = async (
  request: Request,
  response: Response
) => {
  const realEstateData: TRealEstate = request.body;

  const newRealEstate = await createRealEstateService(realEstateData);

  return response.status(201).json(newRealEstate);
};

const listRealEstateController = async (
  request: Request,
  response: Response
) => {
  const allRealEstate = await listRealEstateService();

  return response.json(allRealEstate);
};

export { createRealEstateController, listRealEstateController };
