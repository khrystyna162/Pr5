import { IProductRepository } from '../../../domain/repositories/IProductRepository';
import { Product } from '../../../domain/entities/Product';

export class CreateProductUseCase {
  constructor(private productRepository: IProductRepository) {}

  async execute(productData: { name: string; price: number; description: string }): Promise<Product> {
    return await this.productRepository.create(productData);
  }
}
