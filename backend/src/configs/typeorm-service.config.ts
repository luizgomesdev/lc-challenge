import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import * as path from 'path';

@Injectable()
export default class TypeOrmConfigService implements TypeOrmOptionsFactory {
  constructor(private readonly configService: ConfigService) {}

  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'postgres',
      host: this.configService.get<string>('POSTGRES_DB_HOST'),
      port: this.configService.get<number>('POSTGRES_DB_PORT'),
      username: this.configService.get<string>('POSTGRES_DB_USER'),
      password: this.configService.get<string>('POSTGRES_DB_PASSWORD'),
      database: this.configService.get<string>('POSTGRES_DB'),
      entities: [path.join(__dirname, '..', '**', '*.entity.{ts,js}')],
      migrations: [path.join(__dirname, '..', 'migrations', '*.{ts,js}')],
      migrationsRun: true,

      synchronize: true,
    };
  }
}
