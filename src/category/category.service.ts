import { Category } from './category.entity';
import {
  AddCategoryResponse,
  GetListCategoriesResponse,
  GetOneCategoryResponse,
} from '../../types/category';
import { AddCategoryDto } from './dto';

export class CategoryService {
  async add(newCategory: AddCategoryDto): Promise<AddCategoryResponse> {
    const category = new Category();
    category.name = newCategory.name;
    await category.save();
    return category;
  }

  async get(): Promise<GetListCategoriesResponse> {
    return await Category.find({ relations: ['products'] });
  }

  async getOneCategory(categoryId: string): Promise<GetOneCategoryResponse> {
    return await Category.findOne({ where: { categoryId } });
  }

  async update(
    categoryId: string,
    categoryName: string,
  ): Promise<GetOneCategoryResponse> {
    const category = await Category.findOne({ where: { categoryId } });
    category.name = categoryName;
    await category.save();
    return category;
  }
}
