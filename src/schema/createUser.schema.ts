import { hashSync } from "bcryptjs";
import { z } from "zod";

const createUserSchema = z.object({
  name: z.string().max(45),
  email: z.string().email().max(45),
  password: z.string().max(120),
  admin: z.boolean().optional().default(false),
});

const returnUserSchema = createUserSchema.extend({
  id: z.number(),
  createdAt: z.date().or(z.string()),
  updatedAt: z.date().or(z.string()),
  deletedAt: z.date().or(z.string()).nullable(),
});

const returnUserSchemaNotPassword = returnUserSchema.omit({ password: true });

const returnAllUserSchema = z.array(returnUserSchemaNotPassword);

const patchUserSchema = z.object({
  name: z.string().max(45).optional(),
  email: z.string().email().max(45).optional(),
  password: z.string().max(120).optional(),
});

export {
  createUserSchema,
  returnUserSchema,
  returnUserSchemaNotPassword,
  returnAllUserSchema,
  patchUserSchema,
};
