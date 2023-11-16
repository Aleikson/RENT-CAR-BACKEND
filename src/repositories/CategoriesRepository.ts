import { Category } from '../model/Category';

// DTO = Data transfer object
interface IcreateCategoryDTO {
  name: string;
  description: string;
}
export class CategoriesRepository {
  private categories: Category[];

  constructor() {
    this.categories = [];
  }
  create({ name, description }: IcreateCategoryDTO): void {
    const category = new Category();

    Object.assign(category, {
      name,
      description,
      create_at: new Date(),
    });

    this.categories.push(category);
  }
  list(): Category[] {
    return this.categories;
  }
  findByName(name: string): Category {
    const category = this.categories.find((category) => category.name == name);
    return category;
  }
}
