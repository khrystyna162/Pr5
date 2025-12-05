"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductController = void 0;
class ProductController {
    constructor(createProductUseCase, getAllProductsUseCase, getProductByIdUseCase, updateProductUseCase, deleteProductUseCase) {
        this.createProductUseCase = createProductUseCase;
        this.getAllProductsUseCase = getAllProductsUseCase;
        this.getProductByIdUseCase = getProductByIdUseCase;
        this.updateProductUseCase = updateProductUseCase;
        this.deleteProductUseCase = deleteProductUseCase;
    }
    async create(req, res) {
        try {
            const product = await this.createProductUseCase.execute(req.body);
            res.status(201).json(product);
        }
        catch (error) {
            res.status(500).json({ error: 'Failed to create product' });
        }
    }
    async getAll(req, res) {
        try {
            const products = await this.getAllProductsUseCase.execute();
            res.status(200).json(products);
        }
        catch (error) {
            res.status(500).json({ error: 'Failed to fetch products' });
        }
    }
    async getById(req, res) {
        try {
            const product = await this.getProductByIdUseCase.execute(req.params.id);
            if (!product) {
                res.status(404).json({ error: 'Product not found' });
                return;
            }
            res.status(200).json(product);
        }
        catch (error) {
            res.status(500).json({ error: 'Failed to fetch product' });
        }
    }
    async update(req, res) {
        try {
            const product = await this.updateProductUseCase.execute(req.params.id, req.body);
            if (!product) {
                res.status(404).json({ error: 'Product not found' });
                return;
            }
            res.status(200).json(product);
        }
        catch (error) {
            res.status(500).json({ error: 'Failed to update product' });
        }
    }
    async delete(req, res) {
        try {
            const success = await this.deleteProductUseCase.execute(req.params.id);
            if (!success) {
                res.status(404).json({ error: 'Product not found' });
                return;
            }
            res.status(204).send();
        }
        catch (error) {
            res.status(500).json({ error: 'Failed to delete product' });
        }
    }
}
exports.ProductController = ProductController;
