import {
  Body,
  Controller,
  Get,
  Header,
  HttpCode,
  HttpStatus,
  Post,
  Res,
} from '@nestjs/common';
import { BillService } from './bill.service';
import { Public } from '../common/decorators';
import { AddOrderDetailsDto } from './dto';
import { AddOrderDetailsResponse, GetReportPdfResponse } from './types';
import { GetOrderId } from '../common/decorators/get-order-id.decorator';

@Controller('bill')
export class BillController {
  constructor(private billService: BillService) {}

  @Public()
  @Post('generateReport')
  @HttpCode(HttpStatus.CREATED)
  addReport(
    @Body() orderDetails: AddOrderDetailsDto,
  ): Promise<AddOrderDetailsResponse> {
    return this.billService.addBill(orderDetails);
  }

  @Public()
  @Post('getPdf')
  // @Header('Content-Type', 'application/pdf')
  @HttpCode(HttpStatus.OK)
  getReport(
    @GetOrderId('billId') billId: string,
    @Res() res: Response,
  ): Promise<GetReportPdfResponse> {
    return this.billService.getReportPdf(billId, res);
  }
}
