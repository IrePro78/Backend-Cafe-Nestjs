import { Injectable } from '@nestjs/common';
import { GetDetailsResponse } from './types';

@Injectable()
export class DashboardService {
  async getDetails(): Promise<GetDetailsResponse> {
    return;
  }
}
