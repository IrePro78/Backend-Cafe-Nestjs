export type Category = {
  categoryId: string;
  name: string;
};

export type AddCategoryResponse = Category;

export type GetListCategoriesResponse = Category[];

export type GetOneCategoryResponse = Category;
