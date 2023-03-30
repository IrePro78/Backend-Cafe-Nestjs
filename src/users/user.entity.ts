import {
  BaseEntity,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  Unique,
} from 'typeorm';
import { RegisterUserResponse } from './interfaces/user.interface';

@Entity()
@Unique(['email'])
export class User extends BaseEntity implements RegisterUserResponse {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 255 })
  name: string;

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
}
