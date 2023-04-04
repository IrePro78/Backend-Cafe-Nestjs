import { IsNotEmpty, IsString } from 'class-validator';

export class AddProductDto {
  @IsNotEmpty()
  @IsString()
  name: string;
  description?: string;
  price?: number;
  status?: string;
  categoryId?: string;
}

export class UpdateProductDto {
  name?: string;
  description?: string;
  price?: number;
  status?: string;
  categoryId?: string;
}
