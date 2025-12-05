import { IOrderRepository } from '../../../domain/repositories/IOrderRepository';
import { Order } from '../../../domain/entities/Order';

export class CreateOrderUseCase {
  constructor(private orderRepository: IOrderRepository) {}

  async execute(orderData: { userId: string; productId: string; quantity: number; totalPrice: number; status: 'pending' | 'completed' | 'cancelled' }): Promise<Order> {
    return await this.orderRepository.create(orderData);
  }
}
