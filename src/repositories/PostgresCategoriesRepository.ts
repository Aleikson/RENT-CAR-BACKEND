import { Category } from '../model/Category';
import {
  ICategoriesRepository,
  IcreateCategoryDTO,
} from './ICategoriesRepository';

export class PostgresCategoryRepository implements ICategoriesRepository {
  findByName(name: string): Category {
    console.log(name);
    return null;
  }
  list(): Category[] {
    return null;
  }
  create({ name, description }: IcreateCategoryDTO): void {
    console.log(name, description);
  }
}
