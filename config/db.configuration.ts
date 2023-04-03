import * as process from 'process';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';
import { User } from '../src/user/user.entity';
import { Category } from '../src/category/category.entity';
import { Product } from '../src/product/product.entity';

export class DatabaseConfiguration implements TypeOrmOptionsFactory {
  createTypeOrmOptions(): TypeOrmModuleOptions | Promise<TypeOrmModuleOptions> {
    return {
      type: 'mysql',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      // entities: [process.env.TYPEORM_ENTITIES],
      entities: [User, Category, Product],
      autoLoadEntities: true,
      bigNumberStrings: false,
      logging: true,
      synchronize: true,
      migrations: [process.env.TYPEORM_MIGRATIONS],
      namingStrategy: new SnakeNamingStrategy(),
    };
  }
}
