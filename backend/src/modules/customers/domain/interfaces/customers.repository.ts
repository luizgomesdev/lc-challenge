import { IRepositories } from '../../../../shared/domain/interfaces/repositories.interface';
import { Customer } from '../entities/customer.entity';

export interface ICustomerRepository extends IRepositories<Customer> {}
