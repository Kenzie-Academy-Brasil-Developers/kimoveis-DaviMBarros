import { z } from "zod";
import { realEstatesCreateSchema, realEstatesReadSchema, realEstatesSchema } from "../schemas";
import { Repository } from "typeorm";
import { RealEstate } from "../entities";

type RealEstatesCreate = z.infer<typeof realEstatesCreateSchema>
type RealEstatesRead = z.infer<typeof realEstatesReadSchema>
type RealEstateReturn = z.infer<typeof realEstatesSchema>
type RealEstateRepository = Repository<RealEstate>

export { RealEstatesCreate, RealEstatesRead, RealEstateReturn, RealEstateRepository }