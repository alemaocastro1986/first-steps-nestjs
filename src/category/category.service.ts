import {
  Injectable,
  BadRequestException,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Repository } from 'typeorm';
import { Category } from './category.entity';
import { InjectRepository } from '@nestjs/typeorm';
import CreateCategoryDto from './dtos/CreateCategoryDto';
import UpdateCategoryDto from './dtos/UpdateCategoryDto';

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

  async update({ id, name }: UpdateCategoryDto): Promise<Category> {
    const category = await this.categoryRepository.findOne(id);

    if (!category) {
      throw new HttpException('Category not found!', HttpStatus.BAD_REQUEST);
    }
    category.name = name;
    await this.categoryRepository.save(category);

    return category;
  }

  async remove(id: string): Promise<void> {
    const category = await this.categoryRepository.findOne({
      where: {
        id,
      },
    });

    if (!category) {
      throw new HttpException('Category not found!', HttpStatus.BAD_REQUEST);
    }

    await this.categoryRepository.delete(category);
  }
}
