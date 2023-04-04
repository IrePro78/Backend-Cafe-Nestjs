import { Injectable } from '@nestjs/common';
import { AddProductDto, UpdateProductDto } from './dto';
import {
  AddProductResponse,
  GetListProductsResponse,
  GetOneProductResponse,
} from './types';
import { Product } from './product.entity';

@Injectable()
export class ProductsService {
  async add(newProduct: AddProductDto): Promise<AddProductResponse> {
    const { name, description, price, status, categoryId } = newProduct;
    const product = new Product();
    product.name = name;
    product.description = description;
    product.price = price;
    product.status = status;
    product.category = categoryId;
    await product.save();
    return product;
  }

  async get(): Promise<GetListProductsResponse> {
    return await Product.find({ relations: ['category'] });
  }

  async update(
    productId: string,
    product: UpdateProductDto,
  ): Promise<GetOneProductResponse> {
    const item = await Product.findOne({ where: { productId } });
    item.name = product.name;
    item.description = product.description;
    item.price = product.price;
    item.status = product.status;
    await item.save();
    return item;
  }
}
