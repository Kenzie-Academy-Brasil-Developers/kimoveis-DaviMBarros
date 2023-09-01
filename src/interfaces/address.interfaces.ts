import { Repository } from "typeorm";
import { Address } from "../entities";

type AddressRepository = Repository<Address>

export { AddressRepository }