import { IUserRepository } from '../../../domain/repositories/IUserRepository';
import { User } from '../../../domain/entities/User';

export class CreateUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute(userData: { name: string; email: string }): Promise<User> {
    return await this.userRepository.create(userData);
  }
}
