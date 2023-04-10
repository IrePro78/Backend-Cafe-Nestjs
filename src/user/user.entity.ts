import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';

@Entity()
@Unique(['email'])
export class User extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  userId: string;

  @Column({ length: 255 })
  username: string;

  @Column({ length: 20 })
  contactNumber: string;

  @Column({ length: 50 })
  email: string;

  @Column({ length: 255 })
  password: string;

  @Column({ default: false })
  status: boolean;

  @Column({ default: 'user', length: 20 })
  role: string;

  @Column({ default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;

  @Column({ default: '', length: 255, nullable: true })
  refreshToken: string;
}
