import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { CUSTOMERS_SERVICE_PROVIDER } from './domain/constants';
import { CustomersController } from './infra/controllers/customers.controller';
import { CustomersService } from './infra/services/customers.service';
import { Customer } from './domain/entities/customer.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Customer])],
  controllers: [CustomersController],
  providers: [
    {
      provide: CUSTOMERS_SERVICE_PROVIDER,
      useClass: CustomersService,
    },
  ],
  exports: [CUSTOMERS_SERVICE_PROVIDER],
})
export class CustomersModule {}
