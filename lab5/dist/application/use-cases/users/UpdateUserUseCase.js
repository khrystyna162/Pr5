"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUserUseCase = void 0;
class UpdateUserUseCase {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async execute(id, userData) {
        return await this.userRepository.update(id, userData);
    }
}
exports.UpdateUserUseCase = UpdateUserUseCase;
