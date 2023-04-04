export type ProductType = {
  productId: string;
  name: string;
  description: string;
  price: number;
  status: string;
  categoryId: string;
};

export type AddProductResponse = ProductType;

export type GetListProductsResponse = ProductType[];

export type GetOneProductResponse = ProductType;

export type UpdateProductResponse = ProductType;
