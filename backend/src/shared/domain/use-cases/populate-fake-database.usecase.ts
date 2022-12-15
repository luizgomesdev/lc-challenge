import { Customer } from 'src/modules/customers/domain/entities/customer.entity';
import { QUOTES_SERVICE_PROVIDER } from './../../../modules/quotes/domain/constants/index';
import { USERS_SERVICE_PROVIDER } from './../../../modules/users/domain/constants/index';
import { Inject, Injectable, Logger } from '@nestjs/common';
import { CUSTOMERS_SERVICE_PROVIDER } from 'src/modules/customers/domain/constants';
import { ICustomerRepository } from 'src/modules/customers/domain/interfaces/customers.repository';
import { DEPARTURES_SERVICE_PROVIDER } from 'src/modules/departures/domain/constants';
import { IDepartureRepository } from 'src/modules/departures/domain/interfaces/departure.repository';
import { TRANSPORTATIONS_SERVICE_PROVIDER } from 'src/modules/transportations/domain/constants';
import { ITransportationRepository } from 'src/modules/transportations/domain/interfaces/transportations.repository';
import { IUserRepository } from 'src/modules/users/domain/interfaces/users.repository';
import { IQuoteRepository } from 'src/modules/quotes/domain/interfaces/quotes.repository';
import { faker } from '@faker-js/faker';
import { CustomerStatusEnum } from 'src/modules/customers/domain/enums/customer-status.enum';
import { getNumberRandom } from 'src/shared/utils/get-number-random.util';
import * as DeparturesJSON from 'src/modules/departures/data/airports.json';
import * as TransportationJSON from 'src/modules/transportations/data/transportations.json';
import { Departure } from 'src/modules/departures/domain/entities/departure.entity';
import { Transportation } from 'src/modules/transportations/domain/entities/transportation.entity';
import { User } from 'src/modules/users/domain/entities/user.entity';
import { Quote } from 'src/modules/quotes/domain/entities/quote.entity';
import { QuoteStatusEnum } from 'src/modules/quotes/domain/enums/quote-status.enum';

@Injectable()
export class PopulateFakeDatabase {
  private readonly logger = new Logger(PopulateFakeDatabase.name);

  constructor(
    @Inject(CUSTOMERS_SERVICE_PROVIDER)
    private readonly customersService: ICustomerRepository,

    @Inject(DEPARTURES_SERVICE_PROVIDER)
    private readonly departuresService: IDepartureRepository,

    @Inject(TRANSPORTATIONS_SERVICE_PROVIDER)
    private readonly transportationsService: ITransportationRepository,

    @Inject(USERS_SERVICE_PROVIDER)
    private readonly userRepository: IUserRepository,

    @Inject(QUOTES_SERVICE_PROVIDER)
    private readonly quotesService: IQuoteRepository,
  ) {}

  async execute() {
    const totalFakers = 100;
    this.logger.log('Populating fake database...');

    const customerStatusEnumValues = Object.values(CustomerStatusEnum);
    const fakeCustomers: Partial<Customer>[] = Array.from({
      length: totalFakers,
    }).map(() => ({
      name: faker.name.fullName(),
      status:
        customerStatusEnumValues[
          getNumberRandom(0, customerStatusEnumValues.length - 1)
        ],
      createdAt: faker.date.past(),
    }));

    const fakeCustomersPromises = fakeCustomers.map((customer) =>
      this.customersService.create(customer),
    );

    const fakeCustomersCreated = await Promise.all(fakeCustomersPromises);

    const fakeDepartures: Partial<Departure>[] = DeparturesJSON.slice(
      0,
      100,
    ).map((departure) => ({
      name: departure.name,
      acronym: departure.iata_code,
      latitude: departure._geoloc.lat,
      longitude: departure._geoloc.lng,
    }));

    const fakeDeparturesPromises = fakeDepartures.map((departure) =>
      this.departuresService.create(departure),
    );

    const fakeDeparturesCreated = await Promise.all(fakeDeparturesPromises);

    const fakeTransportation: Partial<Transportation>[] =
      TransportationJSON.map((transportation) => ({
        name: transportation,
      }));

    const fakeTransportationPromises = fakeTransportation.map(
      (transportation) => this.transportationsService.create(transportation),
    );

    const fakeTransportationCreated = await Promise.all(
      fakeTransportationPromises,
    );

    const fakeUsers: Partial<User>[] = Array.from({ length: totalFakers }).map(
      () => ({
        name: faker.name.fullName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        createdAt: faker.date.past(),
      }),
    );

    const fakeUsersPromises = fakeUsers.map((user) =>
      this.userRepository.create(user),
    );

    const fakeUsersCreated = await Promise.all(fakeUsersPromises);
    this.logger.log(`FakeUsersCreated ${fakeUsersCreated.length}`);

    const quoteStatusEnumValues = Object.values(QuoteStatusEnum);
    const quotes: Partial<Quote>[] = Array.from({ length: totalFakers }).map(
      () => ({
        fromDeparture: new Departure({
          id: fakeDeparturesCreated[
            getNumberRandom(0, fakeDeparturesCreated.length - 1)
          ].id,
        }),

        toDeparture: new Departure({
          id: fakeDeparturesCreated[
            getNumberRandom(0, fakeDeparturesCreated.length - 1)
          ].id,
        }),

        customer: new Customer({
          id: fakeCustomersCreated[
            getNumberRandom(0, fakeCustomersCreated.length - 1)
          ].id,
        }),

        status:
          quoteStatusEnumValues[
            getNumberRandom(0, quoteStatusEnumValues.length - 1)
          ],
        transportation: new Transportation({
          id: fakeTransportationCreated[
            getNumberRandom(0, fakeTransportationCreated.length - 1)
          ].id,
        }),
        quantity: getNumberRandom(1, 10),
        departureDate: faker.date.past(),
        departureReturnDate: faker.date.future(),
        price: parseFloat(faker.commerce.price()),
        createdAt: faker.date.past(),
      }),
    );

    console.info(quotes);

    const quotesPromises = quotes.map((quote) =>
      this.quotesService.create(quote),
    );

    const quotesCreated = await Promise.all(quotesPromises);
    console.info(`Quotes created: ${quotesCreated.length}`);

    this.logger.log('Fake database populated!');
  }
}
