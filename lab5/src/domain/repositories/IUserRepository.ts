import { User } from '../entities/User';

export interface IUserRepository {
  create(user: Omit<User, 'id' | 'createdAt'>): Promise<User>;
  findById(id: string): Promise<User | null>;
  findAll(): Promise<User[]>;
  update(id: string, user: Partial<Omit<User, 'id' | 'createdAt'>>): Promise<User | null>;
  delete(id: string): Promise<boolean>;
}
