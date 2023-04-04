import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { Public } from '../common/decorators';
import {
  AddProductResponse,
  GetListProductsResponse,
  GetOneProductResponse,
  UpdateProductResponse,
} from './types';
import {
  AddProductDto,
  UpdateProductDto,
  UpdateStatusOfProductDto,
} from './dto';
import { GetProduct } from '../common/decorators/get-product.decorator';
import { GetProductId } from '../common/decorators/get-product-id.decorator';

@Controller('product')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Public()
  @Post('add')
  @HttpCode(HttpStatus.CREATED)
  addProduct(@Body() product: AddProductDto): Promise<AddProductResponse> {
    return this.productService.add(product);
  }

  @Public()
  @Get('get')
  @HttpCode(HttpStatus.CREATED)
  getProducts(): Promise<GetListProductsResponse> {
    return this.productService.get();
  }

  @Public()
  @Get('getByCategory/:id')
  @HttpCode(HttpStatus.FOUND)
  getProductsByCategory(
    @Param('id') categoryId: string,
  ): Promise<GetListProductsResponse> {
    console.log(categoryId);
    return this.productService.getProductsByCategory(categoryId);
  }

  @Public()
  @Get('getById/:id')
  @HttpCode(HttpStatus.FOUND)
  getProductById(
    @Param('id') productId: string,
  ): Promise<GetOneProductResponse> {
    console.log(productId);
    return this.productService.getProductById(productId);
  }

  @Public()
  @Patch('update')
  @HttpCode(HttpStatus.OK)
  updateProduct(
    @GetProduct() product: UpdateProductDto,
    @GetProductId('productId') productId: string,
  ): Promise<UpdateProductResponse> {
    return this.productService.update(productId, product);
  }

  @Public()
  @Patch('updateStatus')
  @HttpCode(HttpStatus.OK)
  updateStatus(
    @GetProduct('status') productStatus: boolean,
    @GetProductId('productId') productId: string,
  ): Promise<UpdateProductResponse> {
    return this.productService.updateStatus(productId, productStatus);
  }

  @Public()
  @Delete('delete/:id')
  @HttpCode(HttpStatus.OK)
  removeProduct(
    @Param('id') productId: string,
  ): Promise<UpdateProductResponse> {
    return this.productService.remove(productId);
  }
}
