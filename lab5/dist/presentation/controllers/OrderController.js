"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderController = void 0;
class OrderController {
    constructor(createOrderUseCase, getAllOrdersUseCase, getOrderByIdUseCase, updateOrderUseCase, deleteOrderUseCase) {
        this.createOrderUseCase = createOrderUseCase;
        this.getAllOrdersUseCase = getAllOrdersUseCase;
        this.getOrderByIdUseCase = getOrderByIdUseCase;
        this.updateOrderUseCase = updateOrderUseCase;
        this.deleteOrderUseCase = deleteOrderUseCase;
    }
    async create(req, res) {
        try {
            const order = await this.createOrderUseCase.execute(req.body);
            res.status(201).json(order);
        }
        catch (error) {
            res.status(500).json({ error: 'Failed to create order' });
        }
    }
    async getAll(req, res) {
        try {
            const orders = await this.getAllOrdersUseCase.execute();
            res.status(200).json(orders);
        }
        catch (error) {
            res.status(500).json({ error: 'Failed to fetch orders' });
        }
    }
    async getById(req, res) {
        try {
            const order = await this.getOrderByIdUseCase.execute(req.params.id);
            if (!order) {
                res.status(404).json({ error: 'Order not found' });
                return;
            }
            res.status(200).json(order);
        }
        catch (error) {
            res.status(500).json({ error: 'Failed to fetch order' });
        }
    }
    async update(req, res) {
        try {
            const order = await this.updateOrderUseCase.execute(req.params.id, req.body);
            if (!order) {
                res.status(404).json({ error: 'Order not found' });
                return;
            }
            res.status(200).json(order);
        }
        catch (error) {
            res.status(500).json({ error: 'Failed to update order' });
        }
    }
    async delete(req, res) {
        try {
            const success = await this.deleteOrderUseCase.execute(req.params.id);
            if (!success) {
                res.status(404).json({ error: 'Order not found' });
                return;
            }
            res.status(204).send();
        }
        catch (error) {
            res.status(500).json({ error: 'Failed to delete order' });
        }
    }
}
exports.OrderController = OrderController;
