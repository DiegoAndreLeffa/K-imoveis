import { DeepPartial } from "typeorm";
import { z } from "zod";
import {
  createAddressSchama,
  createRealEstateSchema,
  returnAddressSchema,
  returnAllRealEstateSchema,
  returnRealEstateSchema,
} from "../schema";

type TAddress = z.infer<typeof createAddressSchama>;
type AddressReturn = z.infer<typeof returnAddressSchema>;

type TRealEstate = z.infer<typeof createRealEstateSchema>;
type RealEstateReturn = z.infer<typeof returnRealEstateSchema>;

type RealEstateReturnAll = z.infer<typeof returnAllRealEstateSchema>;

type RealEstateUpdate = DeepPartial<TRealEstate>;

export {
  TAddress,
  AddressReturn,
  TRealEstate,
  RealEstateReturn,
  RealEstateUpdate,
  RealEstateReturnAll,
};
