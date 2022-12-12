import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TRANSPORTATIONS_SERVICE_PROVIDER } from './domain/constants';
import { Transportation } from './domain/entities/transportation.entity';
import { TransportationsController } from './infra/controllers/transportations.controller';
import { TransportationsService } from './infra/services/transportations.service';

@Module({
  imports: [TypeOrmModule.forFeature([Transportation])],
  controllers: [TransportationsController],
  providers: [
    {
      provide: TRANSPORTATIONS_SERVICE_PROVIDER,
      useClass: TransportationsService,
    },
  ],
})
export class TransportationsModule {}
