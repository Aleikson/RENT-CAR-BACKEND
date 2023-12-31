import { CategoriesRepository } from '../../repositories/implementations/CategoriesRepository';
import { ListCategoriesController } from './ListCategoryController';
import { ListCategoriesUseCase } from './ListCategoryUseCase';

const categoriesRepository = null /* CategoriesRepository.getInstance(); */
const listCategoriesUseCase = new ListCategoriesUseCase(categoriesRepository);
const listCategoriesController = new ListCategoriesController(
  listCategoriesUseCase,
);

export { listCategoriesController }
