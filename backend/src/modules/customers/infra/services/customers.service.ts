import { Injectable, NotImplementedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions, Repository } from 'typeorm';
import { Customer } from '../../domain/entities/customer.entity';
import { ICustomerRepository } from '../../domain/interfaces/customers.repository';

@Injectable()
export class CustomersService implements ICustomerRepository {
  constructor(
    @InjectRepository(Customer)
    private repository: Repository<Customer>,
  ) {}

  create(data: Partial<Customer>): Promise<Customer> {
    const newCustomer = this.repository.create(data);
    return this.repository.save(newCustomer);
  }

  async findAll(
    options: FindManyOptions<Customer>,
  ): Promise<{ data: Customer[]; total: number }> {
    const [customers, total] = await this.repository.findAndCount(options);
    return { data: customers, total };
  }

  findOne(id: string): Promise<Customer> {
    throw new NotImplementedException('Method not implemented.');
  }

  update(id: string, data: Partial<Customer>): Promise<Customer> {
    throw new NotImplementedException('Method not implemented.');
  }

  remove(id: string): Promise<Customer> {
    throw new NotImplementedException('Method not implemented.');
  }
}
