import { Request, Response } from "express";
import { Users } from "../interfaces";
import {
  createUsersService,
  deleteUserService,
  listUserService,
  updateUserService,
} from "../services";

const createUserController = async (request: Request, response: Response) => {
  const userDate: Users = request.body;

  const newUser = await createUsersService(userDate);

  return response.status(201).json(newUser);
};

const listUserController = async (request: Request, response: Response) => {
  const allUsers = await listUserService();

  return response.json(allUsers);
};

const updateUserController = async (request: Request, response: Response) => {
  const idUser: number = parseInt(request.params.id);
  const userData = request.body;

  const updateUser = await updateUserService(userData, idUser);

  return response.status(200).json(updateUser);
};

const deleteUserController = async (request: Request, response: Response) => {
  const idUser: number = parseInt(request.params.id);

  await deleteUserService(idUser);

  return response.status(204).send();
};

export {
  createUserController,
  listUserController,
  updateUserController,
  deleteUserController,
};
