import { Product } from '../../domain/entities/Product';
import { IProductRepository } from '../../domain/repositories/IProductRepository';

export class ProductRepository implements IProductRepository {
  private products: Product[] = [];
  private idCounter = 1;

  async create(productData: Omit<Product, 'id' | 'createdAt'>): Promise<Product> {
    const product: Product = {
      id: String(this.idCounter++),
      ...productData,
      createdAt: new Date()
    };
    this.products.push(product);
    return product;
  }

  async findById(id: string): Promise<Product | null> {
    return this.products.find(product => product.id === id) || null;
  }

  async findAll(): Promise<Product[]> {
    return this.products;
  }

  async update(id: string, productData: Partial<Omit<Product, 'id' | 'createdAt'>>): Promise<Product | null> {
    const index = this.products.findIndex(product => product.id === id);
    if (index === -1) return null;
    
    this.products[index] = { ...this.products[index], ...productData };
    return this.products[index];
  }

  async delete(id: string): Promise<boolean> {
    const index = this.products.findIndex(product => product.id === id);
    if (index === -1) return false;
    
    this.products.splice(index, 1);
    return true;
  }
}
