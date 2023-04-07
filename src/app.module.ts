import { forwardRef, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseConfiguration } from '../config/db.configuration';
import { AuthModule } from './auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { AtGuard } from './common/guards';
import { CategoryModule } from './category/category.module';
import { ProductModule } from './product/product.module';
import { BillModule } from './bill/bill.module';
import { DashboardModule } from './dashboard/dashboard.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      useClass: DatabaseConfiguration,
    }),
    forwardRef(() => UserModule),
    forwardRef(() => BillModule),
    forwardRef(() => AuthModule),
    forwardRef(() => CategoryModule),
    forwardRef(() => ProductModule),
    DashboardModule,
  ],

  controllers: [AppController],
  providers: [{ provide: APP_GUARD, useClass: AtGuard }, AppService],
})
export class AppModule {}
