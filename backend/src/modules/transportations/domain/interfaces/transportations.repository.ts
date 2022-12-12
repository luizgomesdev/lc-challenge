import { IRepositories } from '../../../../shared/domain/interfaces/repositories.interface';
import { Transportation } from '../entities/transportation.entity';

export interface ITransportationRepository
  extends IRepositories<Transportation> {}
