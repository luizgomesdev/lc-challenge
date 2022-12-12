import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions, Repository } from 'typeorm';
import { Departure } from '../../domain/entities/departure.entity';
import { IDepartureRepository } from '../../domain/interfaces/customers.repository';

@Injectable()
export class DeparturesService implements IDepartureRepository {
  constructor(
    @InjectRepository(Departure)
    private repository: Repository<Departure>,
  ) {}

  create(data: Partial<Departure>): Promise<Departure> {
    const newDeparture = this.repository.create(data);
    return this.repository.save(newDeparture);
  }

  async findAll(
    options: FindManyOptions<Departure>,
  ): Promise<{ data: Departure[]; total: number }> {
    const [departure, total] = await this.repository.findAndCount(options);
    return { data: departure, total };
  }

  findOne(id: string): Promise<Departure> {
    throw new Error('Method not implemented.');
  }

  update(id: string, data: Partial<Departure>): Promise<Departure> {
    throw new Error('Method not implemented.');
  }

  remove(id: string): Promise<Departure> {
    throw new Error('Method not implemented.');
  }
}
