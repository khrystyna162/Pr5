"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOrderUseCase = void 0;
class CreateOrderUseCase {
    constructor(orderRepository) {
        this.orderRepository = orderRepository;
    }
    async execute(orderData) {
        return await this.orderRepository.create(orderData);
    }
}
exports.CreateOrderUseCase = CreateOrderUseCase;
