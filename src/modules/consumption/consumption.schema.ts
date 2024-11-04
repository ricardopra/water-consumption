import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Consumption extends Document {
  @Prop({ required: true })
  userId: string;

  @Prop({ required: true })
  consumptionAmount: number;

  @Prop({ required: true })
  readingDate: Date;
}

export const ConsumptionSchema = SchemaFactory.createForClass(Consumption);
