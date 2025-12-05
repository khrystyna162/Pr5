"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProductUseCase = void 0;
class CreateProductUseCase {
    constructor(productRepository) {
        this.productRepository = productRepository;
    }
    async execute(productData) {
        return await this.productRepository.create(productData);
    }
}
exports.CreateProductUseCase = CreateProductUseCase;
