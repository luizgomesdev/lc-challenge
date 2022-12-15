import { IRepositories } from '../../../../shared/domain/interfaces/repositories.interface';
import { MostPopularDeparturesDTO } from '../dto/most-popular-departures.dto';
import { Quote } from '../entities/quote.entity';

export interface IQuoteRepository extends IRepositories<Quote> {
  mostPopularDepartures(limit: number): Promise<MostPopularDeparturesDTO[]>;
}
