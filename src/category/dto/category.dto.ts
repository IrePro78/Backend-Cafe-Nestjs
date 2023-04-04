import { IsNotEmpty, IsString } from 'class-validator';

export class AddCategoryDto {
  @IsNotEmpty()
  @IsString()
  name: string;
}

export class UpdateCategoryDto {
  categoryId: string;
  @IsNotEmpty()
  @IsString()
  name: string;
}
