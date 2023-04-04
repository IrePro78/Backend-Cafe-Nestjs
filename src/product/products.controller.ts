import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Patch,
  Post,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { Public } from '../common/decorators';
import {
  AddProductResponse,
  GetListProductsResponse,
  UpdateProductResponse,
} from './types';
import { AddProductDto, UpdateProductDto } from './dto';
import { GetProduct } from '../common/decorators/get-product.decorator';
import { GetProductId } from '../common/decorators/get-product-id.decorator';

@Controller('product')
export class ProductsController {
  constructor(private productService: ProductsService) {}

  @Public()
  @Post('add')
  @HttpCode(HttpStatus.CREATED)
  add(@Body() product: AddProductDto): Promise<AddProductResponse> {
    return this.productService.add(product);
  }

  @Public()
  @Get('get')
  @HttpCode(HttpStatus.CREATED)
  getCategories(): Promise<GetListProductsResponse> {
    return this.productService.get();
  }

  @Public()
  @Patch('update')
  @HttpCode(HttpStatus.OK)
  updateCategory(
    @GetProduct() product: UpdateProductDto,
    @GetProductId('productId') productId: string,
  ): Promise<UpdateProductResponse> {
    return this.productService.update(productId, product);
  }
}
