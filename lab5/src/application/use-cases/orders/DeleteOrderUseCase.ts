import { IOrderRepository } from '../../../domain/repositories/IOrderRepository';

export class DeleteOrderUseCase {
  constructor(private orderRepository: IOrderRepository) {}

  async execute(id: string): Promise<boolean> {
    return await this.orderRepository.delete(id);
  }
}
