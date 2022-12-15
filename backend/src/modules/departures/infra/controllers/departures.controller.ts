import { Controller, Get, Inject, Param, Query } from '@nestjs/common';
import { ApiPropertyOptional, ApiQuery } from '@nestjs/swagger';
import { Like } from 'typeorm';
import { DEPARTURES_SERVICE_PROVIDER } from '../../domain/constants';

import { DeparturesService } from '../services/departures.service';

@Controller('departures')
export class DeparturesController {
  constructor(
    @Inject(DEPARTURES_SERVICE_PROVIDER)
    private readonly departuresService: DeparturesService,
  ) {}

  @ApiQuery({
    name: 'page',
    required: false,
    type: Number,
    description: 'Page number',
  })
  @ApiQuery({
    name: 'limit',
    required: false,
    type: Number,
    description: 'Limit of items per page',
  })
  @ApiQuery({
    name: 'search',
    required: false,
    type: String,
    description: 'Search by name or acronym',
  })
  @Get()
  findAll(
    @Query('page') page = 1,
    @Query('limit') limit = 10,
    @Query('search') search?: string,
  ) {
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
