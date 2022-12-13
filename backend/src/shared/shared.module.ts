import { Module } from '@nestjs/common';
import { CustomersModule } from 'src/modules/customers/customers.module';
import { DeparturesModule } from 'src/modules/departures/departures.module';
import { QuotesModule } from 'src/modules/quotes/quotes.module';
import { TransportationsModule } from 'src/modules/transportations/transportations.module';
import { UsersModule } from 'src/modules/users/users.module';
import { PopulateFakeDatabase } from './domain/use-cases/populate-fake-database.usecase';

@Module({
  imports: [
    UsersModule,
    CustomersModule,
    DeparturesModule,
    TransportationsModule,
    QuotesModule,
  ],
  providers: [PopulateFakeDatabase],
  exports: [PopulateFakeDatabase],
})
export class SharedModule {}
