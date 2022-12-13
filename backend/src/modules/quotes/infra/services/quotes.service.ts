import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions, Repository } from 'typeorm';
import { Quote } from '../../domain/entities/quote.entity';
import { IQuoteRepository } from '../../domain/interfaces/quotes.repository';

@Injectable()
export class QuotesService implements IQuoteRepository {
  constructor(
    @InjectRepository(Quote)
    private repository: Repository<Quote>,
  ) {}

  create(data: Partial<Quote>): Promise<Quote> {
    const newQuotes = this.repository.create(data);
    return this.repository.save(newQuotes);
  }

  async findAll(
    options: FindManyOptions<Quote>,
  ): Promise<{ data: Quote[]; total: number }> {
    const [quotes, total] = await this.repository.findAndCount(options);
    return { data: quotes, total };
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
