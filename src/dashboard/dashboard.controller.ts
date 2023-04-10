import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';
import { DashboardService } from './dashboard.service';
import { Public } from '../common/decorators';
import { GetDetailsResponse } from '../../types/dashboard';

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
