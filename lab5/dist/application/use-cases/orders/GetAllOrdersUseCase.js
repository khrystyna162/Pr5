"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetAllOrdersUseCase = void 0;
class GetAllOrdersUseCase {
    constructor(orderRepository) {
        this.orderRepository = orderRepository;
    }
    async execute() {
        return await this.orderRepository.findAll();
    }
}
exports.GetAllOrdersUseCase = GetAllOrdersUseCase;
