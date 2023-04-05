import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { BillService } from './bill.service';
import { Public } from '../common/decorators';
import { AddOrderDetailsDto } from './dto';
import { AddOrderDetailsResponse } from './types';

@Controller('bill')
export class BillController {
  constructor(private billService: BillService) {}

  @Public()
  @Post('generateReport')
  @HttpCode(HttpStatus.CREATED)
  addReport(
    @Body() orderDetails: AddOrderDetailsDto,
  ): Promise<AddOrderDetailsResponse> {
    return this.billService.add(orderDetails);
  }
}
