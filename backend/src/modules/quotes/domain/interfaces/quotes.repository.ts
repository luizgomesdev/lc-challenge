import { IRepositories } from '../../../../shared/domain/interfaces/repositories.interface';
import { Quote } from '../entities/quote.entity';

export interface IQuoteRepository extends IRepositories<Quote> {}
