"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetUserByIdUseCase = void 0;
class GetUserByIdUseCase {
    constructor(userRepository) {
        this.userRepository = userRepository;
    }
    async execute(id) {
        return await this.userRepository.findById(id);
    }
}
exports.GetUserByIdUseCase = GetUserByIdUseCase;
