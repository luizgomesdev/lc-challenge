import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import TypeOrmConfigService from './configs/typeorm-service.config';
import { CustomersModule } from './modules/customers/customers.module';
import { DeparturesModule } from './modules/departures/departures.module';
import { QuotesModule } from './modules/quotes/quotes.module';
import { TransportationsModule } from './modules/transportations/transportations.module';
import { UsersModule } from './modules/users/users.module';

import { SharedModule } from './shared/shared.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useClass: TypeOrmConfigService,
    }),
    SharedModule,
    UsersModule,
    CustomersModule,
    DeparturesModule,
    TransportationsModule,
    QuotesModule,
    SharedModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
