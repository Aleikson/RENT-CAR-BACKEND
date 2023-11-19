import { Router, response } from 'express';
import { CreateCategoryService } from '../services/CreateCategoryService';
import { PostgresCategoryRepository } from '../repositories/PostgresCategoriesRepository';

const categoriesRoutes = Router();
const categoriesRepository = new PostgresCategoryRepository();

categoriesRoutes.post('/', (request, response) => {
  const { name, description } = request.body;

  const createCategoryService = new CreateCategoryService(categoriesRepository);

  createCategoryService.execute({ name, description });

  return response.status(201).send();
});

categoriesRoutes.get('/', (resquest, response) => {
  const all = categoriesRepository.list();
  return response.json(all);
});

export { categoriesRoutes };
