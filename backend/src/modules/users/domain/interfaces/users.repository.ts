import { User } from '../entities/user.entity';
import { IRepositories } from './../../../../shared/domain/interfaces/repositories.interface';

export interface IUserRepository extends IRepositories<User> {}
