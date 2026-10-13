import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { categoryService } from './category.service';
import { CategoryController } from './category.controller';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [
    DatabaseModule,
    PassportModule.register({ defaultStrategy: 'jwt' }),
  ],
  controllers: [CategoryController],
  providers: [categoryService],
  exports: [categoryService],
})
export class CategoryModule {}