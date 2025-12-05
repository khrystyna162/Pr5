import { IOrderRepository } from '../../../domain/repositories/IOrderRepository';
import { Order } from '../../../domain/entities/Order';

export class UpdateOrderUseCase {
  constructor(private orderRepository: IOrderRepository) {}

  async execute(id: string, orderData: { quantity?: number; totalPrice?: number; status?: 'pending' | 'completed' | 'cancelled' }): Promise<Order | null> {
    return await this.orderRepository.update(id, orderData);
  }
}
