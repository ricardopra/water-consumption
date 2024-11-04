import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConsumptionModule } from './modules/consumption/consumption.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://ricardopra:1234@usuario.yotq9.mongodb.net/?retryWrites=true&w=majority&appName=usuario'), // Coloque a sua URL aqui
    ConsumptionModule,
  ],
})
export class AppModule {}


