import { IProductRepository } from '../../../domain/repositories/IProductRepository';
import { Product } from '../../../domain/entities/Product';

export class UpdateProductUseCase {
  constructor(private productRepository: IProductRepository) {}

  async execute(id: string, productData: { name?: string; price?: number; description?: string }): Promise<Product | null> {
    return await this.productRepository.update(id, productData);
  }
}
