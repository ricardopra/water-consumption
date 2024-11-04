import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Consumption, ConsumptionSchema } from './consumption.schema';
import { ConsumptionService } from './consumption.service';
import { ConsumptionController } from './consumption.controller';

@Module({
  imports: [MongooseModule.forFeature([{ name: Consumption.name, schema: ConsumptionSchema }])],
  controllers: [ConsumptionController],
  providers: [ConsumptionService],
})
export class ConsumptionModule {}
