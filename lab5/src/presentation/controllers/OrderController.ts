import { Request, Response } from 'express';
import { CreateOrderUseCase } from '../../application/use-cases/orders/CreateOrderUseCase';
import { GetAllOrdersUseCase } from '../../application/use-cases/orders/GetAllOrdersUseCase';
import { GetOrderByIdUseCase } from '../../application/use-cases/orders/GetOrderByIdUseCase';
import { UpdateOrderUseCase } from '../../application/use-cases/orders/UpdateOrderUseCase';
import { DeleteOrderUseCase } from '../../application/use-cases/orders/DeleteOrderUseCase';

export class OrderController {
  constructor(
    private createOrderUseCase: CreateOrderUseCase,
    private getAllOrdersUseCase: GetAllOrdersUseCase,
    private getOrderByIdUseCase: GetOrderByIdUseCase,
    private updateOrderUseCase: UpdateOrderUseCase,
    private deleteOrderUseCase: DeleteOrderUseCase
  ) {}

  async create(req: Request, res: Response): Promise<void> {
    try {
      const order = await this.createOrderUseCase.execute(req.body);
      res.status(201).json(order);
    } catch (error) {
      res.status(500).json({ error: 'Failed to create order' });
    }
  }

  async getAll(req: Request, res: Response): Promise<void> {
    try {
      const orders = await this.getAllOrdersUseCase.execute();
      res.status(200).json(orders);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch orders' });
    }
  }

  async getById(req: Request, res: Response): Promise<void> {
    try {
      const order = await this.getOrderByIdUseCase.execute(req.params.id);
      if (!order) {
        res.status(404).json({ error: 'Order not found' });
        return;
      }
      res.status(200).json(order);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch order' });
    }
  }

  async update(req: Request, res: Response): Promise<void> {
    try {
      const order = await this.updateOrderUseCase.execute(req.params.id, req.body);
      if (!order) {
        res.status(404).json({ error: 'Order not found' });
        return;
      }
      res.status(200).json(order);
    } catch (error) {
      res.status(500).json({ error: 'Failed to update order' });
    }
  }

  async delete(req: Request, res: Response): Promise<void> {
    try {
      const success = await this.deleteOrderUseCase.execute(req.params.id);
      if (!success) {
        res.status(404).json({ error: 'Order not found' });
        return;
      }
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete order' });
    }
  }
}
