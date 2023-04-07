import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';
import { Public } from '../common/decorators';
import { DashboardService } from './dashboard.service';
import { GetDetailsResponse } from './types';

@Controller('dashboard')
export class DashboardController {
  constructor(private dashboardService: DashboardService) {}

  @Public()
  @Get('details')
  @HttpCode(HttpStatus.OK)
  getDetails(): Promise<GetDetailsResponse> {
    return this.dashboardService.getDetails();
  }
}
