import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configservice=app.get(ConfigService);
  const port=configservice.get<number>('APP_PORT');
  await app.listen(port);
  console.log(port);
}
bootstrap();
