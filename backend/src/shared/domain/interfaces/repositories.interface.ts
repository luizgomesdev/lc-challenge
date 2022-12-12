import { FindManyOptions } from 'typeorm';

export interface IRepositories<T> {
  create(data: Partial<T>): Promise<T>;
  findAll(options: FindManyOptions<T>): Promise<{
    data: T[];
    total: number;
  }>;

  findOne(id: string): Promise<T>;
  update(id: string, data: Partial<T>): Promise<T>;
  remove(id: string): Promise<T>;
}
