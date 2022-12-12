import { faker } from '@faker-js/faker';
import { Test, TestingModule } from '@nestjs/testing';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../../domain/entities/user.entity';
import { UsersService } from './users.service';

describe('UsersService', () => {
  let service: UsersService;
  let module: TestingModule;
  let sharedUser: User;

  beforeAll(async () => {
    module = await Test.createTestingModule({
      imports: [
        TypeOrmModule.forRoot({
          type: 'sqlite',
          database: ':memory:',
          dropSchema: true,
          entities: [User],
          synchronize: true,
          logging: false,
        }),
        TypeOrmModule.forFeature([User]),
      ],
      providers: [UsersService],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  afterAll(async () => {
    await module.close();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a user', async () => {
    const userPassword = faker.internet.password();
    const user = await service.create({
      name: faker.name.firstName(),
      email: faker.internet.email(),
      password: userPassword,
    });

    sharedUser = user;

    expect(user).toBeDefined();
    expect(user.id).toBeDefined();
    expect(user.name).toBeDefined();
    expect(user.email).toBeDefined();
    expect(user.password).not.toBe(userPassword);
    expect(user.createdAt).toBeDefined();
    expect(user.updatedAt).toBeDefined();
  });

  it('should not create a user with the same email', async () => {
    try {
      await service.create({
        name: faker.name.firstName(),
        email: sharedUser.email,
        password: faker.internet.password(),
      });
    } catch (error) {
      expect(error).toBeDefined();
    }
  });

  it('should find all users', async () => {
    const users = await service.findAll({
      take: 10,
      skip: 0,
    });

    expect(users).toBeDefined();
    expect(users.data).toBeDefined();
    expect(users.total).toBeDefined();
  });

  it('should find one user', async () => {
    const user = await service.findOne(sharedUser.id);
    expect(user).toBeDefined();
  });

  it('should update a user', async () => {
    const user = await service.update(sharedUser.id, {
      name: faker.name.firstName(),
    });

    expect(user).toBeDefined();
    expect(user.id).toBe(sharedUser.id);
    expect(user.name).not.toBe(sharedUser.name);
  });
});
