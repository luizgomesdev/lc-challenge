import { Injectable } from '@nestjs/common';
import { FindManyOptions } from 'typeorm';
import { Quote } from '../../domain/entities/quote.entity';
import { IQuoteRepository } from '../../domain/interfaces/quotes.repository';

@Injectable()
export class QuotesService implements IQuoteRepository {
  create(data: Partial<Quote>): Promise<Quote> {
    throw new Error('Method not implemented.');
  }
  findAll(
    options: FindManyOptions<Quote>,
  ): Promise<{ data: Quote[]; total: number }> {
    throw new Error('Method not implemented.');
  }
  findOne(id: string): Promise<Quote> {
    throw new Error('Method not implemented.');
  }
  update(id: string, data: Partial<Quote>): Promise<Quote> {
    throw new Error('Method not implemented.');
  }
  remove(id: string): Promise<Quote> {
    throw new Error('Method not implemented.');
  }
}
