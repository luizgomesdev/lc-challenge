import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions, Repository } from 'typeorm';
import { Transportation } from '../../domain/entities/transportation.entity';
import { ITransportationRepository } from '../../domain/interfaces/transportations.repository';

@Injectable()
export class TransportationsService implements ITransportationRepository {
  constructor(
    @InjectRepository(Transportation)
    private repository: Repository<Transportation>,
  ) {}

  create(data: Partial<Transportation>): Promise<Transportation> {
    const newTransportation = this.repository.create(data);
    return this.repository.save(newTransportation);
  }

  async findAll(
    options: FindManyOptions<Transportation>,
  ): Promise<{ data: Transportation[]; total: number }> {
    const [transportation, total] = await this.repository.findAndCount(options);
    return { data: transportation, total };
  }

  findOne(id: string): Promise<Transportation> {
    throw new Error('Method not implemented.');
  }

  update(id: string, data: Partial<Transportation>): Promise<Transportation> {
    throw new Error('Method not implemented.');
  }

  remove(id: string): Promise<Transportation> {
    throw new Error('Method not implemented.');
  }
}
