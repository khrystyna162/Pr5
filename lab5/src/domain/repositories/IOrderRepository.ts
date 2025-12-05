import { Order } from '../entities/Order';

export interface IOrderRepository {
  create(order: Omit<Order, 'id' | 'createdAt'>): Promise<Order>;
  findById(id: string): Promise<Order | null>;
  findAll(): Promise<Order[]>;
  update(id: string, order: Partial<Omit<Order, 'id' | 'createdAt'>>): Promise<Order | null>;
  delete(id: string): Promise<boolean>;
}
