import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { ConsumptionService } from './consumption.service';

@Controller('consumption')
export class ConsumptionController {
  constructor(private readonly consumptionService: ConsumptionService) {}

  @Post()
  async addConsumption(@Body() body: any) {
    const { userId, consumptionAmount, readingDate } = body;
    return this.consumptionService.addConsumption(userId, consumptionAmount, new Date(readingDate));
  }

  @Get('history')
  async getConsumptionHistory(
    @Query('userId') userId: string,
    @Query('startDate') startDate: string,
    @Query('endDate') endDate: string,
  ) {
    return this.consumptionService.getConsumptionHistory(userId, new Date(startDate), new Date(endDate));
  }

  @Get('alert')
  async checkHighConsumptionAlert(@Query('userId') userId: string) {
    return { alert: await this.consumptionService.checkHighConsumptionAlert(userId) };
  }
}
