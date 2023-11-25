import { CategoriesRepository } from '../../repositories/CategoriesRepository';
import { ListCategoriesController } from './ListCategoryController';
import { ListCategoriesUseCase } from './ListCategoryUseCase';

const categoriesRepository = CategoriesRepository.getInstace();
const listCategoriesUseCase = new ListCategoriesUseCase(categoriesRepository);
const listCategoriesController = new ListCategoriesController(
  listCategoriesUseCase,
);

export { listCategoriesController }