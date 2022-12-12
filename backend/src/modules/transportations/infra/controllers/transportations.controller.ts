import { Body, Controller, Get, Inject, Param, Post } from '@nestjs/common';
import { TRANSPORTATIONS_SERVICE_PROVIDER } from '../../domain/constants';
import { TransportationsService } from '../services/transportations.service';

@Controller('transportations')
export class TransportationsController {
  constructor(
    @Inject(TRANSPORTATIONS_SERVICE_PROVIDER)
    private readonly transportationsService: TransportationsService,
  ) {}

  @Get()
  findAll(@Param('page') page: number, @Param('limit') limit: number) {
    return this.transportationsService.findAll({
      take: limit,
      skip: (page - 1) * limit,
    });
  }
}
