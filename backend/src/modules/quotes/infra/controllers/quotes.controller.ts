import { Transportation } from 'src/modules/transportations/domain/entities/transportation.entity';
import { Departure } from 'src/modules/departures/domain/entities/departure.entity';
import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Inject,
  Logger,
  BadRequestException,
} from '@nestjs/common';
import { QUOTES_SERVICE_PROVIDER } from '../../domain/constants';
import { CreateQuoteDTO } from '../../domain/dto/create-quote.dto';
import { QuotesService } from '../services/quotes.service';
import { IQuoteRepository } from '../../domain/interfaces/quotes.repository';

@Controller('quotes')
export class QuotesController {
  private readonly logger = new Logger(QuotesController.name);

  constructor(
    @Inject(QUOTES_SERVICE_PROVIDER)
    private readonly quotesService: IQuoteRepository,
  ) {}

  @Post()
  create(@Body() data: CreateQuoteDTO) {
    try {
      return this.quotesService.create({
        ...data,
        fromDeparture: new Departure({ id: data.fromDepartureId }),
        toDeparture: new Departure({ id: data.toDepartureId }),
        transportation: new Transportation({
          id: data.transportationId,
        }),
      });
    } catch (error) {
      this.logger.error(error);
      throw new BadRequestException('Cannot create quote');
    }
  }

  @Get()
  findAll(@Param('page') page: number, @Param('limit') limit: number) {
    try {
      return this.quotesService.findAll({
        take: limit,
        skip: (page - 1) * limit,
      });
    } catch (error) {
      this.logger.error(error);
      throw new BadRequestException('Cannot get quotes');
    }
  }
}
