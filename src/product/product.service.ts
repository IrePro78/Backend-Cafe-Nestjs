import {
  ForbiddenException,
  forwardRef,
  Inject,
  Injectable,
} from '@nestjs/common';
import { AddProductDto, UpdateProductDto } from './dto';
import {
  AddProductResponse,
  GetListProductsResponse,
  GetOneProductResponse,
} from 'types';
import { Product } from './product.entity';
import { CategoryService } from '../category/category.service';

@Injectable()
export class ProductService {
  constructor(
    @Inject(forwardRef(() => CategoryService))
    private categoryService: CategoryService,
  ) {}

  async add(newProduct: AddProductDto): Promise<AddProductResponse> {
    const { name, description, price, status, categoryId } = newProduct;
    const category = await this.categoryService.getOneCategory(categoryId);
    if (!category) throw new ForbiddenException('This Category Does Not Exist');

    const product = new Product();
    product.name = name;
    product.description = description;
    product.price = price;
    product.status = status;
    product.category = category;
    await product.save();
    return product;
  }

  async get(): Promise<GetListProductsResponse> {
    return await Product.find({ relations: ['category'] });
  }

  async getProductsByCategory(
    categoryId: string,
  ): Promise<GetListProductsResponse> {
    return await Product.find({
      where: { category: { categoryId: categoryId } },
    });
  }

  async getProductById(productId: string): Promise<GetOneProductResponse> {
    return await Product.findOne({ where: { productId } });
  }

  async update(
    productId: string,
    obj: UpdateProductDto,
  ): Promise<GetOneProductResponse> {
    const { name, description, price, status, categoryId } = obj;
    const category = await this.categoryService.getOneCategory(categoryId);
    const item = await Product.findOne({ where: { productId } });
    if (!item || !category)
      throw new ForbiddenException('This Product Or Category Does Not Exist');
    item.name = name;
    item.description = description;
    item.price = price;
    item.status = status;
    item.category = category;
    await item.save();
    return item;
  }

  async updateStatus(
    productId: string,
    productStatus: boolean,
  ): Promise<GetOneProductResponse> {
    const product = await Product.findOne({ where: { productId } });
    if (!product) throw new ForbiddenException('This Product Does Not Exist');
    product.status = productStatus;
    await product.save();
    return product;
  }

  async remove(productId: string): Promise<Product> {
    const product = await Product.findOne({ where: { productId } });
    if (!product) throw new ForbiddenException('This Product Does Not Exist');
    return await product.remove();
  }
}
