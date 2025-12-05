"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteOrderUseCase = void 0;
class DeleteOrderUseCase {
    constructor(orderRepository) {
        this.orderRepository = orderRepository;
    }
    async execute(id) {
        return await this.orderRepository.delete(id);
    }
}
exports.DeleteOrderUseCase = DeleteOrderUseCase;
