import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ProductResponse } from './interfaces/product.interface';

@Entity()
export class Product extends BaseEntity implements ProductResponse {
  @PrimaryGeneratedColumn('uuid')
  productId: string;

  @Column({ length: 255 })
  name: string;
  categoryId: string;
}
