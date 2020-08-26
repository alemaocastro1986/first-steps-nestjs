import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Category } from './category.entity';
import { InjectRepository } from '@nestjs/typeorm';
import CreateCategoryDto from './dtos/CreateCategoryDto';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    protected categoryRepository: Repository<Category>,
  ) {}

  findAll(): Promise<Category[]> {
    return this.categoryRepository.find();
  }

  create({ name }: CreateCategoryDto): Promise<Category> {
    const category = this.categoryRepository.create({
      name,
    });

    return this.categoryRepository.save(category);
  }
}
