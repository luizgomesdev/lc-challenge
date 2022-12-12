import { Controller, Get, Inject, Param } from '@nestjs/common';
import { DEPARTURES_SERVICE_PROVIDER } from 'src/modules/customers/constants';
import { DeparturesService } from '../services/departures.service';

@Controller('departures')
export class DeparturesController {
  constructor(
    @Inject(DEPARTURES_SERVICE_PROVIDER)
    private readonly departuresService: DeparturesService,
  ) {}

  @Get()
  findAll(@Param('page') page: number, @Param('limit') limit: number) {
    return this.departuresService.findAll({
      take: limit,
      skip: (page - 1) * limit,
    });
  }
}
