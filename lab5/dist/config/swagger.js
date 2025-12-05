"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.swaggerSpec = void 0;
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'CRUD REST API Documentation',
            version: '1.0.0',
            description: 'Документація REST API з шаровою архітектурою для Лабораторної роботи №5',
        },
        servers: [
            {
                url: 'http://localhost:3000',
                description: 'Development server',
            },
        ],
        tags: [
            {
                name: 'Users',
                description: 'Операції з користувачами'
            },
            {
                name: 'Products',
                description: 'Операції з продуктами'
            },
            {
                name: 'Orders',
                description: 'Операції із замовленнями'
            }
        ]
    },
    apis: ['./src/presentation/routes/*.ts'],
};
exports.swaggerSpec = (0, swagger_jsdoc_1.default)(options);
