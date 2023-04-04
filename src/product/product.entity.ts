import {
  BaseEntity,
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Category } from '../category/category.entity';

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

  @Column({ length: 20, default: '' })
  status: string;

  @ManyToOne((type) => Category, (category) => category.products)
  @JoinColumn()
  category: Category;
}
