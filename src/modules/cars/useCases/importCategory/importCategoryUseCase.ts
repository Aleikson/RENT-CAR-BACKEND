import csvParse from 'csv-parser';
import fs from 'fs';
import { ICategoriesRepository } from '../../repositories/ICategoriesRepository';

interface IImportCategory {
  name: string;
  description: string;
}
export class ImportCategoryUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  loadCategories(file: Express.Multer.File): Promise<IImportCategory[]> {
    return new Promise((resolve, reject) => {
      const stream = fs.createReadStream(file.path);

      const categories: IImportCategory[] = [];

      const parseFile = csvParse({ headers: false });

      stream.pipe(parseFile);

      parseFile
        .on('data', async (line) => {
          const name = line['0'];
          const description = line['1'];

          if (name && description) {
            categories.push({
              name: String(name).trim(),
              description: String(description).trim(),
            });
          }
        })
        .on('end', () => {
          fs.promises.unlink(file.path)
          resolve(categories);
        })
        .on('error', (error) => {
          reject(error);
        });
    });
  }

  async execute(file: Express.Multer.File): Promise<void> {
    const categories = await this.loadCategories(file);

    categories.map(async (category) => {
      const { name, description } = category;

      const existCategory = this.categoriesRepository.findByName(name);

      if (!existCategory) {
        this.categoriesRepository.create({
          name,
          description,
        });
      }
    });
  }
}
