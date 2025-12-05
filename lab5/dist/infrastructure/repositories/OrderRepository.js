"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderRepository = void 0;
class OrderRepository {
    constructor() {
        this.orders = [];
        this.idCounter = 1;
    }
    async create(orderData) {
        const order = {
            id: String(this.idCounter++),
            ...orderData,
            createdAt: new Date()
        };
        this.orders.push(order);
        return order;
    }
    async findById(id) {
        return this.orders.find(order => order.id === id) || null;
    }
    async findAll() {
        return this.orders;
    }
    async update(id, orderData) {
        const index = this.orders.findIndex(order => order.id === id);
        if (index === -1)
            return null;
        this.orders[index] = { ...this.orders[index], ...orderData };
        return this.orders[index];
    }
    async delete(id) {
        const index = this.orders.findIndex(order => order.id === id);
        if (index === -1)
            return false;
        this.orders.splice(index, 1);
        return true;
    }
}
exports.OrderRepository = OrderRepository;
