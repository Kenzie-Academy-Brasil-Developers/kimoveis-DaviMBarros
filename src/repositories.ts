import { AppDataSource } from "./data-source";
import { Address, Category, RealEstate, Schedule, User } from "./entities";
import { AddressRepository, CategoriesRepository, RealEstateRepository, SchedulesRepository, UsersRepository } from "./interfaces";

const usersRepository: UsersRepository = AppDataSource.getRepository(User)
const categoriesRepository: CategoriesRepository = AppDataSource.getRepository(Category)
const realEstateRepository: RealEstateRepository = AppDataSource.getRepository(RealEstate)
const addressRepository: AddressRepository = AppDataSource.getRepository(Address)
const schedulesRepository: SchedulesRepository = AppDataSource.getRepository(Schedule)

export { usersRepository, categoriesRepository, realEstateRepository, addressRepository, schedulesRepository }