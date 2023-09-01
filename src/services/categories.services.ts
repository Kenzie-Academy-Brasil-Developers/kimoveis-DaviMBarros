import { Category } from "../entities"
import { AppError } from "../errors"
import { CategoriesCreate, CategoriesReturn } from "../interfaces"
import { categoriesRepository } from "../repositories"

const createCategorie = async (payload: CategoriesCreate): Promise<CategoriesReturn> => {
    const category: Category = categoriesRepository.create(payload)
    await categoriesRepository.save(category)

    return category
}

const readCategories = async (): Promise<CategoriesReturn[]> => {
    const category: Category[] = await categoriesRepository.find()

    return category
}

const readRealEstatesByCategorie = async (categoryId: number): Promise<any> => {
    const category = await categoriesRepository.findOne({ where: { id: categoryId }, relations: { realEstate: true } })

    if(!category) {
        throw new AppError("Category not found", 404)
    }

    return category
}

export default { createCategorie, readCategories, readRealEstatesByCategorie }