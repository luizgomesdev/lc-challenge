import { Injectable, NotImplementedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindManyOptions, Repository } from 'typeorm';
import { CreateUserDTO } from '../../domain/dto/create-user.dto';
import { UpdateUserDTO } from '../../domain/dto/update-user.dto';
import { User } from '../../domain/entities/user.entity';
import { IUserRepository } from '../../domain/interfaces/users.repository';

@Injectable()
export class UsersService implements IUserRepository {
  constructor(
    @InjectRepository(User)
    private repository: Repository<User>,
  ) {}

  async create(data: CreateUserDTO) {
    const user = this.repository.create(data);
    return this.repository.save(user);
  }

  async findAll(options: FindManyOptions<User>) {
    const [user, total] = await this.repository.findAndCount(options);
    return { data: user, total };
  }

  async findOne(id: string) {
    return this.repository.findOne({ where: { id } });
  }

  async update(id: string, data: UpdateUserDTO) {
    await this.repository.update(id, data);
    return this.findOne(id);
  }

  async remove(id: string) {
    const user = await this.findOne(id);
    return this.repository.remove(user);
  }
}
