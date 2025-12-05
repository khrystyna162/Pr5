"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRepository = void 0;
class UserRepository {
    constructor() {
        this.users = [];
        this.idCounter = 1;
    }
    async create(userData) {
        const user = {
            id: String(this.idCounter++),
            ...userData,
            createdAt: new Date()
        };
        this.users.push(user);
        return user;
    }
    async findById(id) {
        return this.users.find(user => user.id === id) || null;
    }
    async findAll() {
        return this.users;
    }
    async update(id, userData) {
        const index = this.users.findIndex(user => user.id === id);
        if (index === -1)
            return null;
        this.users[index] = { ...this.users[index], ...userData };
        return this.users[index];
    }
    async delete(id) {
        const index = this.users.findIndex(user => user.id === id);
        if (index === -1)
            return false;
        this.users.splice(index, 1);
        return true;
    }
}
exports.UserRepository = UserRepository;
