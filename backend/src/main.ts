import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { PopulateFakeDatabase } from './shared/domain/use-cases/populate-fake-database.usecase';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.setGlobalPrefix('api');

  const config = new DocumentBuilder()
    .setTitle('Cats example')
    .setDescription('The cats API description')
    .setVersion('1.0')
    .addTag('cats')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api/swagger', app, document);

  // try {
  //   await app.get(PopulateFakeDatabase).execute();
  // } catch (error) {
  //   console.error(error);
  // }

  await app.listen(process.env.BACKEND_PORT || 3001);
}
bootstrap();
