import { Request, Response } from "express";
import { createLoginService } from "../services";

const loginController = async (request: Request, response: Response) => {
  const token = await createLoginService(request.body);

  return response.json({ token: token });
};

export { loginController };
