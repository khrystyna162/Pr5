"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swagger_1 = require("./config/swagger");
// Infrastructure
const UserRepository_1 = require("./infrastructure/repositories/UserRepository");
const ProductRepository_1 = require("./infrastructure/repositories/ProductRepository");
const OrderRepository_1 = require("./infrastructure/repositories/OrderRepository");
// Application - Use Cases for Users
const CreateUserUseCase_1 = require("./application/use-cases/users/CreateUserUseCase");
const GetAllUsersUseCase_1 = require("./application/use-cases/users/GetAllUsersUseCase");
const GetUserByIdUseCase_1 = require("./application/use-cases/users/GetUserByIdUseCase");
const UpdateUserUseCase_1 = require("./application/use-cases/users/UpdateUserUseCase");
const DeleteUserUseCase_1 = require("./application/use-cases/users/DeleteUserUseCase");
// Application - Use Cases for Products
const CreateProductUseCase_1 = require("./application/use-cases/products/CreateProductUseCase");
const GetAllProductsUseCase_1 = require("./application/use-cases/products/GetAllProductsUseCase");
const GetProductByIdUseCase_1 = require("./application/use-cases/products/GetProductByIdUseCase");
const UpdateProductUseCase_1 = require("./application/use-cases/products/UpdateProductUseCase");
const DeleteProductUseCase_1 = require("./application/use-cases/products/DeleteProductUseCase");
// Application - Use Cases for Orders
const CreateOrderUseCase_1 = require("./application/use-cases/orders/CreateOrderUseCase");
const GetAllOrdersUseCase_1 = require("./application/use-cases/orders/GetAllOrdersUseCase");
const GetOrderByIdUseCase_1 = require("./application/use-cases/orders/GetOrderByIdUseCase");
const UpdateOrderUseCase_1 = require("./application/use-cases/orders/UpdateOrderUseCase");
const DeleteOrderUseCase_1 = require("./application/use-cases/orders/DeleteOrderUseCase");
// Presentation
const UserController_1 = require("./presentation/controllers/UserController");
const ProductController_1 = require("./presentation/controllers/ProductController");
const OrderController_1 = require("./presentation/controllers/OrderController");
const userRoutes_1 = require("./presentation/routes/userRoutes");
const productRoutes_1 = require("./presentation/routes/productRoutes");
const orderRoutes_1 = require("./presentation/routes/orderRoutes");
const app = (0, express_1.default)();
const PORT = 3000;
app.use(express_1.default.json());
// Initialize repositories
const userRepository = new UserRepository_1.UserRepository();
const productRepository = new ProductRepository_1.ProductRepository();
const orderRepository = new OrderRepository_1.OrderRepository();
// Initialize use cases for Users
const createUserUseCase = new CreateUserUseCase_1.CreateUserUseCase(userRepository);
const getAllUsersUseCase = new GetAllUsersUseCase_1.GetAllUsersUseCase(userRepository);
const getUserByIdUseCase = new GetUserByIdUseCase_1.GetUserByIdUseCase(userRepository);
const updateUserUseCase = new UpdateUserUseCase_1.UpdateUserUseCase(userRepository);
const deleteUserUseCase = new DeleteUserUseCase_1.DeleteUserUseCase(userRepository);
// Initialize use cases for Products
const createProductUseCase = new CreateProductUseCase_1.CreateProductUseCase(productRepository);
const getAllProductsUseCase = new GetAllProductsUseCase_1.GetAllProductsUseCase(productRepository);
const getProductByIdUseCase = new GetProductByIdUseCase_1.GetProductByIdUseCase(productRepository);
const updateProductUseCase = new UpdateProductUseCase_1.UpdateProductUseCase(productRepository);
const deleteProductUseCase = new DeleteProductUseCase_1.DeleteProductUseCase(productRepository);
// Initialize use cases for Orders
const createOrderUseCase = new CreateOrderUseCase_1.CreateOrderUseCase(orderRepository);
const getAllOrdersUseCase = new GetAllOrdersUseCase_1.GetAllOrdersUseCase(orderRepository);
const getOrderByIdUseCase = new GetOrderByIdUseCase_1.GetOrderByIdUseCase(orderRepository);
const updateOrderUseCase = new UpdateOrderUseCase_1.UpdateOrderUseCase(orderRepository);
const deleteOrderUseCase = new DeleteOrderUseCase_1.DeleteOrderUseCase(orderRepository);
// Initialize controllers
const userController = new UserController_1.UserController(createUserUseCase, getAllUsersUseCase, getUserByIdUseCase, updateUserUseCase, deleteUserUseCase);
const productController = new ProductController_1.ProductController(createProductUseCase, getAllProductsUseCase, getProductByIdUseCase, updateProductUseCase, deleteProductUseCase);
const orderController = new OrderController_1.OrderController(createOrderUseCase, getAllOrdersUseCase, getOrderByIdUseCase, updateOrderUseCase, deleteOrderUseCase);
// Setup routes
app.use('/api/users', (0, userRoutes_1.createUserRoutes)(userController));
app.use('/api/products', (0, productRoutes_1.createProductRoutes)(productController));
app.use('/api/orders', (0, orderRoutes_1.createOrderRoutes)(orderController));
// Swagger documentation
app.use('/api-docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swagger_1.swaggerSpec));
app.get('/', (req, res) => {
    res.json({
        message: 'CRUD REST API with Layered Architecture',
        documentation: '/api-docs'
    });
});
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log(`API Documentation available at http://localhost:${PORT}/api-docs`);
});
