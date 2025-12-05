"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetProductByIdUseCase = void 0;
class GetProductByIdUseCase {
    constructor(productRepository) {
        this.productRepository = productRepository;
    }
    async execute(id) {
        return await this.productRepository.findById(id);
    }
}
exports.GetProductByIdUseCase = GetProductByIdUseCase;
