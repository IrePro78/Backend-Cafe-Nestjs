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
  UpdateCategoryResponse,
} from './types';
import { Public } from '../common/decorators';
import { GetCategory } from '../common/decorators/get-category.decorator';
import { GetCategoryId } from '../common/decorators/get-category-id.decorator';

@Controller('category')
export class CategoryController {
  constructor(private categoryService: CategoryService) {}

  @Public()
  @Post('add')
  @HttpCode(HttpStatus.CREATED)
  addCategory(@Body() category: AddCategoryDto): Promise<AddCategoryResponse> {
    return this.categoryService.add(category);
  }

  @Public()
  @Get('get')
  @HttpCode(HttpStatus.CREATED)
  getCategories(): Promise<GetListCategoriesResponse> {
    return this.categoryService.get();
  }

  // @Public()
  @Patch('update')
  @HttpCode(HttpStatus.OK)
  updateCategory(
    @GetCategory('name') name: string,
    @GetCategoryId('categoryId') categoryId: string,
  ): Promise<UpdateCategoryResponse> {
    return this.categoryService.update(categoryId, name);
  }
}
