import { z } from "zod";

const createCategorySchema = z.object({
  name: z.string().max(45),
});

const returnCategoriesSchema = createCategorySchema.extend({
  id: z.number(),
});

const returnAllCategoriesSchema = z.array(returnCategoriesSchema);

export {
  createCategorySchema,
  returnCategoriesSchema,
  returnAllCategoriesSchema,
};
