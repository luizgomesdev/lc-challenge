import { Module } from '@nestjs/common';
import { QuotesService } from './infra/services/quotes.service';
import { QuotesController } from './infra/controllers/quotes.controller';

@Module({
  controllers: [QuotesController],
  providers: [QuotesService]
})
export class QuotesModule {}
