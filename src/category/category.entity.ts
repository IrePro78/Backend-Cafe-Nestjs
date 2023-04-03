import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { CategoryResponse } from './interfaces/category.interface';

@Entity()
export class Category extends BaseEntity implements CategoryResponse {
  @PrimaryGeneratedColumn('uuid')
  categoryId: string;

  @Column({ length: 255 })
  name: string;
}
