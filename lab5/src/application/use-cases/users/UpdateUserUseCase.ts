import { IUserRepository } from '../../../domain/repositories/IUserRepository';
import { User } from '../../../domain/entities/User';

export class UpdateUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute(id: string, userData: { name?: string; email?: string }): Promise<User | null> {
    return await this.userRepository.update(id, userData);
  }
}
