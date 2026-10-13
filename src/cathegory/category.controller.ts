import { Controller, Get, Post, Put, Delete, Body, Param, UseGuards } from '@nestjs/common';
import { categoryService } from './category.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@UseGuards(JwtAuthGuard) // Protects all routes by default
@Controller('category')
export class CategoryController {
  constructor(private readonly categoryService: categoryService) {}

  // GET /category
  @Get()
  async getAll() {
    return this.categoryService.getAll();
  }

  // GET /category/:id
  @Get(':id')
  async getOne(@Param('id') id: string) {
    return this.categoryService.findById(+id);
  }

  // POST /category
  @Post()
  async create(@Body() body: { name: string; description?: string }) {
    return this.categoryService.createCategory(body);
  }

  // PUT /category/:id
  @Put(':id')
  async update(@Param('id') id: string, @Body() body: { name?: string; description?: string }) {
    return this.categoryService.updateCategory(+id, body);
  }

  // DELETE /category/:id
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.categoryService.deleteCategory(+id);
  }
}