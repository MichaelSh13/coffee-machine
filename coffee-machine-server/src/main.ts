import { ValidationPipe } from '@nestjs/common';
import { NestFactory, Reflector } from '@nestjs/core';
import { WsAdapter } from '@nestjs/platform-ws';
import { json, urlencoded } from 'body-parser';
import { AppModule } from './app.module';
import { RolesGuard } from './modules/auth/guards/roles/roles.guard';
import { TrimPipe } from './pipes/Trim';

const PORT = process.env.SERVER_PORT||8080;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();
  app.useWebSocketAdapter(new WsAdapter(app));
  app.use(json({ limit: '50mb' }));
  app.use(urlencoded({ extended: true, limit: '50mb' }));
  app.useGlobalGuards(new RolesGuard(new Reflector()));
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
    }),

    new TrimPipe(),
  );
  
  await app.listen(PORT);
}
bootstrap();
