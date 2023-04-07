import { Injectable } from '@nestjs/common';
import { GetDetailsResponse } from './types';
import { Category } from '../category/category.entity';
import { Product } from '../product/product.entity';
import { Bill } from '../bill/bill.entity';

@Injectable()
export class DashboardService {
  async getDetails(): Promise<GetDetailsResponse> {
    const categoryCount = await Category.count();
    const productCount = await Product.count();
    const billCount = await Bill.count();
    const data = {
      category: categoryCount,
      product: productCount,
      bill: billCount,
    };
    return data;
  }
}
