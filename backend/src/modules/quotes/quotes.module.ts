import { CustomersModule } from 'src/modules/customers/customers.module';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QUOTES_SERVICE_PROVIDER } from './domain/constants';
import { Quote } from './domain/entities/quote.entity';
import { QuotesController } from './infra/controllers/quotes.controller';
import { QuotesService } from './infra/services/quotes.service';

@Module({
  imports: [TypeOrmModule.forFeature([Quote]), CustomersModule],
  controllers: [QuotesController],
  providers: [
    {
      provide: QUOTES_SERVICE_PROVIDER,
      useClass: QuotesService,
    },
  ],

  exports: [QUOTES_SERVICE_PROVIDER],
})
export class QuotesModule {}
