import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Category } from '../category/category.entity';
import { GetOneCategoryResponse } from '../../types/category';

@Entity()
export class Product extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  productId: string;

  @Column({ length: 255 })
  name: string;

  @Column({ length: 255, default: '' })
  description: string;

  @Column({ type: 'float', precision: 7, scale: 2, default: 0 })
  price: number;

  @Column({ default: false })
  status: boolean;

  @ManyToOne((type) => Category, (category) => category.products)
  @JoinColumn()
  category: GetOneCategoryResponse;
}
