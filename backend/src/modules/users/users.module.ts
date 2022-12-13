import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { USERS_SERVICE_PROVIDER } from './domain/constants';
import { User } from './domain/entities/user.entity';
import { UsersController } from './infra/controllers/users.controller';
import { UsersService } from './infra/services/users.service';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  controllers: [UsersController],
  providers: [
    {
      provide: USERS_SERVICE_PROVIDER,
      useClass: UsersService,
    },
  ],

  exports: [USERS_SERVICE_PROVIDER],
})
export class UsersModule {}
