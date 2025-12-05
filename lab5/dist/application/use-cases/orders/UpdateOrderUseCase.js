"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateOrderUseCase = void 0;
class UpdateOrderUseCase {
    constructor(orderRepository) {
        this.orderRepository = orderRepository;
    }
    async execute(id, orderData) {
        return await this.orderRepository.update(id, orderData);
    }
}
exports.UpdateOrderUseCase = UpdateOrderUseCase;
