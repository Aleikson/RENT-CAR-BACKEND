import { Specification } from '../model/Specification';

import {
  ISpecificationRepository,
  ISpecificationRepositoryDTO,
} from './ISpecificationRepository';

export class SpecificationRepository implements ISpecificationRepository {
  private specifications: Specification[];

  constructor() {
    this.specifications = [];
  }

  create({ name, description }: ISpecificationRepositoryDTO): void {
    const specificatios = new Specification();

    Object.assign(specificatios, {
      name,
      description,
      create_at: new Date(),
    });

    this.specifications.push(specificatios);
  }

  findByName(name: string): Specification {
    const specification = this.specifications.find(
      (specification) => specification.name === name,
    );
    return specification;
  }
}
