import { Request, Response } from "express";
import {
  createCategoriesService,
  listCategoriesService,
  listRealEstateCategoriesService,
} from "../services";

const createCategoriesController = async (
  request: Request,
  response: Response
) => {
  const categoriesData = request.body;

  const newCategories = await createCategoriesService(categoriesData);

  return response.status(201).json(newCategories);
};

const listCategoriesController = async (
  request: Request,
  response: Response
) => {
  const allCategories = await listCategoriesService();

  return response.json(allCategories);
};

const listRealEstateCategories = async (
  request: Request,
  response: Response
) => {
  const idCategory = parseInt(request.params.id);

  const listCategorysRealEstate = await listRealEstateCategoriesService(
    idCategory
  );

  return response.status(200).json(listCategorysRealEstate);
};

export {
  createCategoriesController,
  listCategoriesController,
  listRealEstateCategories,
};
