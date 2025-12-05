import { Order } from '../../domain/entities/Order';
import { IOrderRepository } from '../../domain/repositories/IOrderRepository';

export class OrderRepository implements IOrderRepository {
  private orders: Order[] = [];
  private idCounter = 1;

  async create(orderData: Omit<Order, 'id' | 'createdAt'>): Promise<Order> {
    const order: Order = {
      id: String(this.idCounter++),
      ...orderData,
      createdAt: new Date()
    };
    this.orders.push(order);
    return order;
  }

  async findById(id: string): Promise<Order | null> {
    return this.orders.find(order => order.id === id) || null;
  }

  async findAll(): Promise<Order[]> {
    return this.orders;
  }

  async update(id: string, orderData: Partial<Omit<Order, 'id' | 'createdAt'>>): Promise<Order | null> {
    const index = this.orders.findIndex(order => order.id === id);
    if (index === -1) return null;
    
    this.orders[index] = { ...this.orders[index], ...orderData };
    return this.orders[index];
  }

  async delete(id: string): Promise<boolean> {
    const index = this.orders.findIndex(order => order.id === id);
    if (index === -1) return false;
    
    this.orders.splice(index, 1);
    return true;
  }
}
