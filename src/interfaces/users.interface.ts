import { DeepPartial } from "typeorm";
import { z } from "zod";
import {
  createUserSchema,
  returnAllUserSchema,
  returnUserSchema,
} from "../schema";

type Users = z.infer<typeof createUserSchema>;
type UserReturn = z.infer<typeof returnUserSchema>;
type UserReturnNotPassword = Omit<UserReturn, "password">;

type UsersReturnAll = z.infer<typeof returnAllUserSchema>;

type UserUpdate = DeepPartial<Users>;

export { Users, UserReturn, UserReturnNotPassword, UsersReturnAll, UserUpdate };
