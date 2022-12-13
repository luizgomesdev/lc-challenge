import { IRepositories } from '../../../../shared/domain/interfaces/repositories.interface';
import { Departure } from '../entities/departure.entity';

export interface IDepartureRepository extends IRepositories<Departure> {}
