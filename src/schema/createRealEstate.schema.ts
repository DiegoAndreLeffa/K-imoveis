import { z } from "zod";
import { returnCategoriesSchema } from "./createCategory.schema";

const createAddressSchama = z.object({
  street: z.string().max(45),
  zipCode: z.string().max(8),
  number: z.string().max(7).optional().nullable(),
  city: z.string().max(20),
  state: z.string().max(2),
});

const returnAddressSchema = createAddressSchama.extend({
  id: z.number(),
});

const createRealEstateSchema = z.object({
  value: z.number().or(z.string()),
  size: z.number().positive(),
  address: createAddressSchama,
  categoryId: z.number().optional(),
});

const returnRealEstateSchema = createRealEstateSchema.extend({
  id: z.number(),
  sold: z.boolean().default(false),
  address: returnAddressSchema.required(),
  createdAt: z.date().or(z.string()),
  updatedAt: z.date().or(z.string()),
  category: returnCategoriesSchema,
});

const returnRealEstateSchema2 = createRealEstateSchema.extend({
  id: z.number(),
  sold: z.boolean().default(false),
  address: returnAddressSchema.required(),
  createdAt: z.date().or(z.string()),
  updatedAt: z.date().or(z.string()),
});

const returnAllRealEstateSchema = returnRealEstateSchema2.array();

export {
  createAddressSchama,
  returnAddressSchema,
  createRealEstateSchema,
  returnRealEstateSchema,
  returnAllRealEstateSchema,
};
