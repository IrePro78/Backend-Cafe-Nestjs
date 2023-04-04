export type Product = {
  productId: string;
  name: string;
  description: string;
  price: number;
  status: boolean;
};

export type AddProductResponse = Product;

export type GetListProductsResponse = Product[];

export type GetOneProductResponse = Product;

export type UpdateProductResponse = Product;

export type RemoveProductResponse = 'Product Deleted Successfully';
