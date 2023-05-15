import { z } from "zod";
import { createLoginSchema } from "../schema";

type Login = z.infer<typeof createLoginSchema>;

export { Login };
