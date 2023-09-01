import { z } from "zod";
import { categoriesCreateSchema, categoriesReadSchema, categoriesSchema } from "../schemas";
import { Repository } from "typeorm";
import { Category } from "../entities";

type CategoriesCreate = z.infer<typeof categoriesCreateSchema>
type CategoriesRead = z.infer<typeof categoriesReadSchema>
type CategoriesReturn = z.infer<typeof categoriesSchema>
type CategoriesRepository = Repository<Category>

export { CategoriesCreate, CategoriesRead, CategoriesReturn, CategoriesRepository }