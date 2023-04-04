import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Category } from '../category/category.entity';
import { GetOneCategoryResponse } from '../category/types';

@Entity()
export class Product extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  billId: string;

  @Column({ length: 255 })
  name: string;

  @Column({ length: 50 })
  email: string;

  @Column({ length: 20 })
  contactNumber: string;

  @Column({ length: 50 })
  paymentMethod: string;

  @Column({ type: 'float', precision: 7, scale: 2, default: 0 })
  total: number;

  @Column({ type: 'simple-json', default: null })
  productDetails: string;

  @Column({ length: 255 })
  createBy: string;

  @ManyToOne((type) => Category, (category) => category.products)
  @JoinColumn()
  category: GetOneCategoryResponse;
}
