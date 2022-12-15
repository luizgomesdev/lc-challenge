import { Inject, Injectable } from '@nestjs/common';
import { CustomersService } from '../../infra/services/customers.service';
import { CUSTOMERS_SERVICE_PROVIDER } from '../constants';
import { CreateCustomerDTO } from '../dtos/create-customer.dto';

@Injectable()
export class CreateCustomerUseCase {
  constructor(
    @Inject(CUSTOMERS_SERVICE_PROVIDER)
    private readonly customersService: CustomersService,
  ) {}

  async execute(data: CreateCustomerDTO) {
    return this.customersService.create(data);
  }
}
