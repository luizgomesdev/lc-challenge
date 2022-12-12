import { Module } from '@nestjs/common';
import { DeparturesService } from './departures.service';
import { DeparturesController } from './departures.controller';

@Module({
  controllers: [DeparturesController],
  providers: [DeparturesService]
})
export class DeparturesModule {}
