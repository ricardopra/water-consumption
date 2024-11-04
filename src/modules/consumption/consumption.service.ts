import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Consumption } from './consumption.schema';

@Injectable()
export class ConsumptionService {
  constructor(@InjectModel(Consumption.name) private consumptionModel: Model<Consumption>) {}

  async addConsumption(userId: string, consumptionAmount: number, readingDate: Date): Promise<Consumption> {
    const newConsumption = new this.consumptionModel({ userId, consumptionAmount, readingDate });
    return newConsumption.save();
  }

  async getConsumptionHistory(userId: string, startDate: Date, endDate: Date): Promise<Consumption[]> {
    return this.consumptionModel.find({
      userId,
      readingDate: { $gte: startDate, $lte: endDate },
    }).sort({ readingDate: 1 });
  }

  async checkHighConsumptionAlert(userId: string): Promise<boolean> {
    const lastTwoRecords = await this.consumptionModel
      .find({ userId })
      .sort({ readingDate: -1 })
      .limit(2);

    if (lastTwoRecords.length < 2) return false;

    const [latest, previous] = lastTwoRecords;
    return latest.consumptionAmount > previous.consumptionAmount;
  }
}
