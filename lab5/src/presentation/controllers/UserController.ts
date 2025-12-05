import { Request, Response } from 'express';
import { CreateUserUseCase } from '../../application/use-cases/users/CreateUserUseCase';
import { GetAllUsersUseCase } from '../../application/use-cases/users/GetAllUsersUseCase';
import { GetUserByIdUseCase } from '../../application/use-cases/users/GetUserByIdUseCase';
import { UpdateUserUseCase } from '../../application/use-cases/users/UpdateUserUseCase';
import { DeleteUserUseCase } from '../../application/use-cases/users/DeleteUserUseCase';

export class UserController {
  constructor(
    private createUserUseCase: CreateUserUseCase,
    private getAllUsersUseCase: GetAllUsersUseCase,
    private getUserByIdUseCase: GetUserByIdUseCase,
    private updateUserUseCase: UpdateUserUseCase,
    private deleteUserUseCase: DeleteUserUseCase
  ) {}

  async create(req: Request, res: Response): Promise<void> {
    try {
      const user = await this.createUserUseCase.execute(req.body);
      res.status(201).json(user);
    } catch (error) {
      res.status(500).json({ error: 'Failed to create user' });
    }
  }

  async getAll(req: Request, res: Response): Promise<void> {
    try {
      const users = await this.getAllUsersUseCase.execute();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch users' });
    }
  }

  async getById(req: Request, res: Response): Promise<void> {
    try {
      const user = await this.getUserByIdUseCase.execute(req.params.id);
      if (!user) {
        res.status(404).json({ error: 'User not found' });
        return;
      }
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch user' });
    }
  }

  async update(req: Request, res: Response): Promise<void> {
    try {
      const user = await this.updateUserUseCase.execute(req.params.id, req.body);
      if (!user) {
        res.status(404).json({ error: 'User not found' });
        return;
      }
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ error: 'Failed to update user' });
    }
  }

  async delete(req: Request, res: Response): Promise<void> {
    try {
      const success = await this.deleteUserUseCase.execute(req.params.id);
      if (!success) {
        res.status(404).json({ error: 'User not found' });
        return;
      }
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete user' });
    }
  }
}
