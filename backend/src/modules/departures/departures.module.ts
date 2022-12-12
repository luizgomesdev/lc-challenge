import { DEPARTURES_SERVICE_PROVIDER } from './../customers/constants/index';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Departure } from './domain/entities/departure.entity';
import { DeparturesController } from './infra/controllers/departures.controller';
import { DeparturesService } from './infra/services/departures.service';

@Module({
  imports: [TypeOrmModule.forFeature([Departure])],
  controllers: [DeparturesController],
  providers: [
    {
      provide: DEPARTURES_SERVICE_PROVIDER,
      useClass: DeparturesService,
    },
  ],
  exports: [DEPARTURES_SERVICE_PROVIDER],
})
export class DeparturesModule {}
