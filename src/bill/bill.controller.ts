import {
  Body,
  Controller,
  Delete,
  Get,
  Header,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Res,
} from '@nestjs/common';
import { BillService } from './bill.service';
import { Public } from '../common/decorators';
import { AddOrderDetailsDto } from './dto';
import {
  AddReportPdfResponse,
  GetBillsResponse,
  RemoveBillResponse,
} from './types';
import { GetOrderId } from '../common/decorators/get-order-id.decorator';

@Controller('bill')
export class BillController {
  constructor(private billService: BillService) {}

  @Public()
  @Post('generateReport')
  @HttpCode(HttpStatus.CREATED)
  addReport(
    @Body() orderDetails: AddOrderDetailsDto,
  ): Promise<AddReportPdfResponse> {
    return this.billService.addBill(orderDetails);
  }

  @Public()
  @Post('getPdf')
  @HttpCode(HttpStatus.OK)
  getReport(
    @GetOrderId('billId') billId: string,
    @Res() res: Response,
  ): Promise<string> {
    return this.billService.getReportPdf(billId, res);
  }

  @Public()
  @Get('getBills')
  @HttpCode(HttpStatus.OK)
  getBills(): Promise<GetBillsResponse> {
    return this.billService.getBills();
  }

  @Public()
  @Delete('delete/:id')
  @HttpCode(HttpStatus.OK)
  removeBill(@Param('id') billId: string): Promise<RemoveBillResponse> {
    return this.billService.removeBill(billId);
  }
}
