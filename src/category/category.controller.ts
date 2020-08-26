import { Controller, Get, Post, Body } from '@nestjs/common';
import { CategoryService } from './category.service';
import CreateCategoryDto from './dtos/CreateCategoryDto';
import { Category } from './category.entity';

@Controller('categories')
export class CategoryController {
  constructor(protected categoryService: CategoryService) {}
  @Get()
  async index() {
    const categories = await this.categoryService.findAll();
    return categories;
  }

  @Post()
  async store(@Body() createDto: CreateCategoryDto): Promise<Category> {
    const category = await this.categoryService.create({
      name: createDto.name,
    });

    return category;
  }
}
