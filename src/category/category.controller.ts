import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Delete,
  Res,
  HttpStatus,
} from '@nestjs/common';
import { CategoryService } from './category.service';
import CreateCategoryDto from './dtos/CreateCategoryDto';
import { Category } from './category.entity';
import UpdateCategoryDto from './dtos/UpdateCategoryDto';
import { Response } from 'express';

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

  @Patch()
  async update(@Body() { id, name }: UpdateCategoryDto): Promise<Category> {
    const category = await this.categoryService.update({ id, name });
    return category;
  }

  @Delete()
  async destroy(@Res() res: Response, @Body() { id }: { id: string }) {
    await this.categoryService.remove(id);
    return res.status(HttpStatus.NO_CONTENT).json();
  }
}
