"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductRepository = void 0;
class ProductRepository {
    constructor() {
        this.products = [];
        this.idCounter = 1;
    }
    async create(productData) {
        const product = {
            id: String(this.idCounter++),
            ...productData,
            createdAt: new Date()
        };
        this.products.push(product);
        return product;
    }
    async findById(id) {
        return this.products.find(product => product.id === id) || null;
    }
    async findAll() {
        return this.products;
    }
    async update(id, productData) {
        const index = this.products.findIndex(product => product.id === id);
        if (index === -1)
            return null;
        this.products[index] = { ...this.products[index], ...productData };
        return this.products[index];
    }
    async delete(id) {
        const index = this.products.findIndex(product => product.id === id);
        if (index === -1)
            return false;
        this.products.splice(index, 1);
        return true;
    }
}
exports.ProductRepository = ProductRepository;
