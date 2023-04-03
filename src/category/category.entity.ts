import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { AddCategoryResponse } from './types';

@Entity()
export class Category extends BaseEntity implements AddCategoryResponse {
  @PrimaryGeneratedColumn('uuid')
  categoryId: string;

  @Column({ length: 255 })
  name: string;
}
