import { Request, Response } from 'express';
import { CreateProductUseCase } from '../../application/use-cases/products/CreateProductUseCase';
import { GetAllProductsUseCase } from '../../application/use-cases/products/GetAllProductsUseCase';
import { GetProductByIdUseCase } from '../../application/use-cases/products/GetProductByIdUseCase';
import { UpdateProductUseCase } from '../../application/use-cases/products/UpdateProductUseCase';
import { DeleteProductUseCase } from '../../application/use-cases/products/DeleteProductUseCase';

export class ProductController {
  constructor(
    private createProductUseCase: CreateProductUseCase,
    private getAllProductsUseCase: GetAllProductsUseCase,
    private getProductByIdUseCase: GetProductByIdUseCase,
    private updateProductUseCase: UpdateProductUseCase,
    private deleteProductUseCase: DeleteProductUseCase
  ) {}

  async create(req: Request, res: Response): Promise<void> {
    try {
      const product = await this.createProductUseCase.execute(req.body);
      res.status(201).json(product);
    } catch (error) {
      res.status(500).json({ error: 'Failed to create product' });
    }
  }

  async getAll(req: Request, res: Response): Promise<void> {
    try {
      const products = await this.getAllProductsUseCase.execute();
      res.status(200).json(products);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch products' });
    }
  }

  async getById(req: Request, res: Response): Promise<void> {
    try {
      const product = await this.getProductByIdUseCase.execute(req.params.id);
      if (!product) {
        res.status(404).json({ error: 'Product not found' });
        return;
      }
      res.status(200).json(product);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch product' });
    }
  }

  async update(req: Request, res: Response): Promise<void> {
    try {
      const product = await this.updateProductUseCase.execute(req.params.id, req.body);
      if (!product) {
        res.status(404).json({ error: 'Product not found' });
        return;
      }
      res.status(200).json(product);
    } catch (error) {
      res.status(500).json({ error: 'Failed to update product' });
    }
  }

  async delete(req: Request, res: Response): Promise<void> {
    try {
      const success = await this.deleteProductUseCase.execute(req.params.id);
      if (!success) {
        res.status(404).json({ error: 'Product not found' });
        return;
      }
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete product' });
    }
  }
}
