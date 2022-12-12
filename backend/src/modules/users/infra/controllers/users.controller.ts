import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { USERS_SERVICE_PROVIDER } from '../../domain/constants';
import { CreateUserDTO } from '../../domain/dto/create-user.dto';
import { UpdateUserDTO } from '../../domain/dto/update-user.dto';
import { UsersService } from '../services/users.service';

@Controller('users')
export class UsersController {
  constructor(
    @Inject(USERS_SERVICE_PROVIDER)
    private readonly usersService: UsersService,
  ) {}

  @Post()
  create(@Body() data: CreateUserDTO) {
    return this.usersService.create(data);
  }

  @Get()
  findAll(@Param('page') page: number, @Param('limit') limit: number) {
    return this.usersService.findAll({
      take: limit,
      skip: (page - 1) * limit,
    });
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() data: UpdateUserDTO) {
    return this.usersService.update(id, data);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }
}
