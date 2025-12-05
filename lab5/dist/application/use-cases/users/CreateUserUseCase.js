"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserUseCase = void 0;
class CreateUserUseCase {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async execute(userData) {
        return await this.userRepository.create(userData);
    }
}
exports.CreateUserUseCase = CreateUserUseCase;
