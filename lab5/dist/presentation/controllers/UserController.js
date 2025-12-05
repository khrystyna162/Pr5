"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
class UserController {
    constructor(createUserUseCase, getAllUsersUseCase, getUserByIdUseCase, updateUserUseCase, deleteUserUseCase) {
        this.createUserUseCase = createUserUseCase;
        this.getAllUsersUseCase = getAllUsersUseCase;
        this.getUserByIdUseCase = getUserByIdUseCase;
        this.updateUserUseCase = updateUserUseCase;
        this.deleteUserUseCase = deleteUserUseCase;
    }
    async create(req, res) {
        try {
            const user = await this.createUserUseCase.execute(req.body);
            res.status(201).json(user);
        }
        catch (error) {
            res.status(500).json({ error: 'Failed to create user' });
        }
    }
    async getAll(req, res) {
        try {
            const users = await this.getAllUsersUseCase.execute();
            res.status(200).json(users);
        }
        catch (error) {
            res.status(500).json({ error: 'Failed to fetch users' });
        }
    }
    async getById(req, res) {
        try {
            const user = await this.getUserByIdUseCase.execute(req.params.id);
            if (!user) {
                res.status(404).json({ error: 'User not found' });
                return;
            }
            res.status(200).json(user);
        }
        catch (error) {
            res.status(500).json({ error: 'Failed to fetch user' });
        }
    }
    async update(req, res) {
        try {
            const user = await this.updateUserUseCase.execute(req.params.id, req.body);
            if (!user) {
                res.status(404).json({ error: 'User not found' });
                return;
            }
            res.status(200).json(user);
        }
        catch (error) {
            res.status(500).json({ error: 'Failed to update user' });
        }
    }
    async delete(req, res) {
        try {
            const success = await this.deleteUserUseCase.execute(req.params.id);
            if (!success) {
                res.status(404).json({ error: 'User not found' });
                return;
            }
            res.status(204).send();
        }
        catch (error) {
            res.status(500).json({ error: 'Failed to delete user' });
        }
    }
}
exports.UserController = UserController;
