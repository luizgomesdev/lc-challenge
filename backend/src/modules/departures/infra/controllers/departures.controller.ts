import { Controller, Get, Inject, Param, Query } from '@nestjs/common';
import { Like } from 'typeorm';
import { DEPARTURES_SERVICE_PROVIDER } from '../../domain/constants';

import { DeparturesService } from '../services/departures.service';

@Controller('departures')
export class DeparturesController {
  constructor(
    @Inject(DEPARTURES_SERVICE_PROVIDER)
    private readonly departuresService: DeparturesService,
  ) {}

  @Get()
  findAll(
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 10,
    @Query('search') search?: string,
  ) {
    console.info('page', page);
    console.info('limit', limit);
    console.info('limit', (page - 1) * limit);

    return this.departuresService.findAll({
      ...(search && {
        where: [
          {
            name: Like(`%${search}%`),
          },
          {
            acronym: Like(`%${search}%`),
          },
        ],
      }),

      take: limit,
      skip: (page - 1) * limit,
    });
  }
}
