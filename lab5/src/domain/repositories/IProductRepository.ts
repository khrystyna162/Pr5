import { Product } from '../entities/Product';

export interface IProductRepository {
  create(product: Omit<Product, 'id' | 'createdAt'>): Promise<Product>;
  findById(id: string): Promise<Product | null>;
  findAll(): Promise<Product[]>;
  update(id: string, product: Partial<Omit<Product, 'id' | 'createdAt'>>): Promise<Product | null>;
  delete(id: string): Promise<boolean>;
}
