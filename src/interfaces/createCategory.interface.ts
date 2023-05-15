import { z } from "zod";
import {
  createCategorySchema,
  returnAllCategoriesSchema,
  returnCategoriesSchema,
} from "../schema";

type Categories = z.infer<typeof createCategorySchema>;
type CategoriesReturn = z.infer<typeof returnCategoriesSchema>;

type CategoriesReturnAll = z.infer<typeof returnAllCategoriesSchema>;

export { Categories, CategoriesReturn, CategoriesReturnAll };
