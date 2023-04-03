import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Patch,
  Post,
} from '@nestjs/common';
import { CategoryService } from './category.service';
import { AddCategoryDto } from './dto';
import {
  AddCategoryResponse,
  GetListCategoriesResponse,
  GetOneCategoryResponse,
} from './types';
import { Public } from '../common/decorators';
import { GetCategory } from '../common/decorators';
import { GetCategoryId } from '../common/decorators';

@Controller('category')
export class CategoryController {
  constructor(private categoryService: CategoryService) {}

  @Public()
  @Post('add')
  @HttpCode(HttpStatus.CREATED)
  add(@Body() category: AddCategoryDto): Promise<AddCategoryResponse> {
    return this.categoryService.add(category);
  }

  @Public()
  @Get('get')
  @HttpCode(HttpStatus.CREATED)
  getCategories(): Promise<GetListCategoriesResponse> {
    return this.categoryService.get();
  }

  @Public()
  @Patch('update')
  @HttpCode(HttpStatus.OK)
  updateCategory(
    @GetCategoryId() categoryId: string,
    @GetCategory('name') categoryName: string,
  ): Promise<GetOneCategoryResponse> {
    return this.categoryService.update(categoryId, categoryName);
  }
}
