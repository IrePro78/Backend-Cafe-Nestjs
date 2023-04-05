import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Bill extends BaseEntity {
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
  totalAmount: number;

  @Column({ type: 'json', default: null })
  productDetails: string;

  @Column({ length: 255, default: '' })
  createBy: string;

  // @ManyToOne((type) => Category, (category) => category.products)
  // @JoinColumn()
  // category: GetOneCategoryResponse;
}
