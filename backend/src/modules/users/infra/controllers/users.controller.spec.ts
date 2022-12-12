import { faker } from '@faker-js/faker';
import { Test, TestingModule } from '@nestjs/testing';
import { v4 as uuid } from 'uuid';
import { USERS_SERVICE_PROVIDER } from '../../domain/constants';
import { User } from '../../domain/entities/user.entity';
import { CreateUserDTO } from './../../domain/dto/create-user.dto';
import { UsersController } from './users.controller';

describe('UsersController', () => {
  let controller: UsersController;
  let randomUsers: User[];

  beforeAll(() => {
    randomUsers = Array.from({ length: 10 }, () => {
      const user = new User({
        id: uuid(),
        name: faker.name.firstName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
        createdAt: new Date(),
        updatedAt: new Date(),
      });

      return user;
    });
  });

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [
        {
          provide: USERS_SERVICE_PROVIDER,
          useValue: {
            create: jest.fn().mockImplementation((data: CreateUserDTO) => {
              const user = new User({
                ...data,
                id: uuid(),
                createdAt: new Date(),
                updatedAt: new Date(),
              });

              randomUsers.push(user);

              return Promise.resolve(user);
            }),

            findAll: jest.fn().mockImplementation(() => {
              return Promise.resolve({
                data: randomUsers,
                total: randomUsers.length,
              });
            }),

            findOne: jest.fn().mockImplementation((id: string) => {
              return Promise.resolve(
                randomUsers.find((user) => user.id === id),
              );
            }),
            update: jest.fn().mockImplementation((id: string, data: any) => {
              const user = randomUsers.find((user) => user.id === id);

              if (user) {
                Object.assign(user, data);
              }

              return Promise.resolve(user);
            }),

            remove: jest.fn().mockImplementation((id: string) => {
              const user = randomUsers.find((user) => user.id === id);

              if (user) {
                randomUsers.splice(randomUsers.indexOf(user), 1);
              }

              return Promise.resolve(user);
            }),
          },
        },
      ],
    }).compile();

    controller = module.get<UsersController>(UsersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should create user', async () => {
    const newUserDTO: CreateUserDTO = {
      name: 'John Doe',
      email: 'johndoe@gmail.com',
      password: '123456',
    };

    const newUser = await controller.create(newUserDTO);

    expect(newUser).toHaveProperty('id');
    expect(newUser).toHaveProperty('name', newUserDTO.name);
    expect(newUser).toHaveProperty('email', newUserDTO.email);
    expect(newUser).toHaveProperty('password', newUserDTO.password);
    expect(newUser).toHaveProperty('createdAt');
    expect(newUser).toHaveProperty('updatedAt');
  });

  it('should find all users', async () => {
    const { data } = await controller.findAll(1, 10);
    expect(data.length).toBe(randomUsers.length);
  });

  it('should find one user', async () => {
    const user = await controller.findOne(randomUsers[0].id);
    expect(user).toHaveProperty('id', randomUsers[0].id);
  });

  it('should update user', async () => {
    const user = await controller.findOne(randomUsers[0].id);
    const updatedUser = await controller.update(user.id, {
      name: 'John Doe 2',
    });
    expect(updatedUser).toHaveProperty('id', user.id);
    expect(updatedUser).toHaveProperty('name', 'John Doe 2');
  });

  it('should delete user', async () => {
    const user = await controller.findOne(randomUsers[0].id);
    const deletedUser = await controller.remove(user.id);
    expect(deletedUser).toHaveProperty('id', user.id);
  });
});
