import { Controller, Get, Inject, Query } from '@nestjs/common';
import { ApiQuery } from '@nestjs/swagger';
import { TRANSPORTATIONS_SERVICE_PROVIDER } from '../../domain/constants';
import { TransportationsService } from '../services/transportations.service';

@Controller('transportations')
export class TransportationsController {
  constructor(
    @Inject(TRANSPORTATIONS_SERVICE_PROVIDER)
    private readonly transportationsService: TransportationsService,
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
  @Get()
  findAll(@Query('page') page = 1, @Query('limit') limit = 10) {
    return this.transportationsService.findAll({
      take: limit,
      skip: (page - 1) * limit,
    });
  }
}
