import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as express from 'express';
import { join } from 'path';
import * as dotenv from 'dotenv';

dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Configuração detalhada do CORS
  app.enableCors({
    origin: ['http://localhost:3000', 'http://localhost:5173', 'https://water-consumption-pied.vercel.app/'], // Origens permitidas
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true, // Permite credenciais (cookies, headers de autenticação)
    maxAge: 3600 // Cache do preflight por 1 hora
  });

  app.use(express.static(join(__dirname, '..', 'public')));
  await app.listen(3000);
}
bootstrap();