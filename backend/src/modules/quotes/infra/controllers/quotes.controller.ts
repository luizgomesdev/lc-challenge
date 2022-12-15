import { ApiQuery } from '@nestjs/swagger';
import { faker } from '@faker-js/faker';
import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Inject,
  Logger,
  Param,
  Post,
  Query,
} from '@nestjs/common';
import { CREATE_CUSTOMER_USECASE_PROVIDER } from 'src/modules/customers/domain/constants';
import { Departure } from 'src/modules/departures/domain/entities/departure.entity';
import { Transportation } from 'src/modules/transportations/domain/entities/transportation.entity';
import { QUOTES_SERVICE_PROVIDER } from '../../domain/constants';
import { CreateQuoteDTO } from '../../domain/dto/create-quote.dto';
import { Quote } from '../../domain/entities/quote.entity';
import { IQuoteRepository } from '../../domain/interfaces/quotes.repository';
import { CreateCustomerUseCase } from './../../../customers/domain/use-cases/create-customer.usecase';
import { QuoteStatusEnum } from '../../domain/enums/quote-status.enum';

@Controller('quotes')
export class QuotesController {
  private readonly logger = new Logger(QuotesController.name);

  constructor(
    @Inject(QUOTES_SERVICE_PROVIDER)
    private readonly quotesService: IQuoteRepository,

    @Inject(CREATE_CUSTOMER_USECASE_PROVIDER)
    private readonly createCustomerUseCase: CreateCustomerUseCase,
  ) {}

  @Post()
  async create(@Body() data: CreateQuoteDTO) {
    try {
      const customer = await this.createCustomerUseCase.execute({
        name: data.name,
      });

      const quote = await this.quotesService.create({
        ...data,
        customer,
        fromDeparture: new Departure({ id: data.fromDepartureId }),
        toDeparture: new Departure({ id: data.toDepartureId }),
        transportation: new Transportation({
          id: data.transportationId,
        }),
        price: parseFloat(faker.finance.amount(100, 1000, 2)),
      });

      return quote;
    } catch (error) {
      this.logger.error(error);
      throw new BadRequestException('Cannot create quote');
    }
  }

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
    name: 'status',
    required: false,
    enum: QuoteStatusEnum,
    description: 'Search by status',
  })
  @ApiQuery({
    name: 'createdAtOrder',
    required: false,
    enum: ['ASC', 'DESC'],
    description: 'Order by createdAt',
  })
  @Get()
  async findAll(
    @Query('page') page = 1,
    @Query('limit') limit = 10,
    @Query('status') status?: QuoteStatusEnum,
    @Query('createdAtOrder') createdAtOrder?: 'ASC' | 'DESC',
  ) {
    try {
      const quotes = this.quotesService.findAll({
        take: limit,
        skip: (page - 1) * limit,
        where: status && { status },
        order: { createdAt: createdAtOrder ?? 'DESC' },
      });

      return quotes;
    } catch (error) {
      this.logger.error(error);
      throw new BadRequestException('Cannot get quotes');
    }
  }

  @Get('most-popular')
  async getMostPopular(@Query('limit') limit = 10) {
    try {
      const response = await this.quotesService.mostPopularDepartures(limit);
      return response;
    } catch (error) {
      this.logger.error(error);
      throw new BadRequestException('Cannot get most popular quotes');
    }
  }
}
