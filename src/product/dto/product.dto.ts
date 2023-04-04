import { IsNotEmpty, IsString } from 'class-validator';

export class AddProductDto {
  @IsNotEmpty()
  @IsString()
  name: string;
  description?: string;
  price?: number;
  status?: boolean;
  categoryId?: string;
}

export class UpdateProductDto {
  name?: string;
  description?: string;
  price?: number;
  status?: boolean;
  categoryId?: string;
}

export class UpdateStatusOfProductDto {
  status: string;
}
