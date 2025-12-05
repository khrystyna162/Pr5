import express from 'express';
import swaggerUi from 'swagger-ui-express';
import { swaggerSpec } from './config/swagger';

// Infrastructure
import { UserRepository } from './infrastructure/repositories/UserRepository';
import { ProductRepository } from './infrastructure/repositories/ProductRepository';
import { OrderRepository } from './infrastructure/repositories/OrderRepository';

// Application - Use Cases for Users
import { CreateUserUseCase } from './application/use-cases/users/CreateUserUseCase';
import { GetAllUsersUseCase } from './application/use-cases/users/GetAllUsersUseCase';
import { GetUserByIdUseCase } from './application/use-cases/users/GetUserByIdUseCase';
import { UpdateUserUseCase } from './application/use-cases/users/UpdateUserUseCase';
import { DeleteUserUseCase } from './application/use-cases/users/DeleteUserUseCase';

// Application - Use Cases for Products
import { CreateProductUseCase } from './application/use-cases/products/CreateProductUseCase';
import { GetAllProductsUseCase } from './application/use-cases/products/GetAllProductsUseCase';
import { GetProductByIdUseCase } from './application/use-cases/products/GetProductByIdUseCase';
import { UpdateProductUseCase } from './application/use-cases/products/UpdateProductUseCase';
import { DeleteProductUseCase } from './application/use-cases/products/DeleteProductUseCase';

// Application - Use Cases for Orders
import { CreateOrderUseCase } from './application/use-cases/orders/CreateOrderUseCase';
import { GetAllOrdersUseCase } from './application/use-cases/orders/GetAllOrdersUseCase';
import { GetOrderByIdUseCase } from './application/use-cases/orders/GetOrderByIdUseCase';
import { UpdateOrderUseCase } from './application/use-cases/orders/UpdateOrderUseCase';
import { DeleteOrderUseCase } from './application/use-cases/orders/DeleteOrderUseCase';

// Presentation
import { UserController } from './presentation/controllers/UserController';
import { ProductController } from './presentation/controllers/ProductController';
import { OrderController } from './presentation/controllers/OrderController';
import { createUserRoutes } from './presentation/routes/userRoutes';
import { createProductRoutes } from './presentation/routes/productRoutes';
import { createOrderRoutes } from './presentation/routes/orderRoutes';

const app = express();
const PORT = 3000;

app.use(express.json());

// Initialize repositories
const userRepository = new UserRepository();
const productRepository = new ProductRepository();
const orderRepository = new OrderRepository();

// Initialize use cases for Users
const createUserUseCase = new CreateUserUseCase(userRepository);
const getAllUsersUseCase = new GetAllUsersUseCase(userRepository);
const getUserByIdUseCase = new GetUserByIdUseCase(userRepository);
const updateUserUseCase = new UpdateUserUseCase(userRepository);
const deleteUserUseCase = new DeleteUserUseCase(userRepository);

// Initialize use cases for Products
const createProductUseCase = new CreateProductUseCase(productRepository);
const getAllProductsUseCase = new GetAllProductsUseCase(productRepository);
const getProductByIdUseCase = new GetProductByIdUseCase(productRepository);
const updateProductUseCase = new UpdateProductUseCase(productRepository);
const deleteProductUseCase = new DeleteProductUseCase(productRepository);

// Initialize use cases for Orders
const createOrderUseCase = new CreateOrderUseCase(orderRepository);
const getAllOrdersUseCase = new GetAllOrdersUseCase(orderRepository);
const getOrderByIdUseCase = new GetOrderByIdUseCase(orderRepository);
const updateOrderUseCase = new UpdateOrderUseCase(orderRepository);
const deleteOrderUseCase = new DeleteOrderUseCase(orderRepository);

// Initialize controllers
const userController = new UserController(
  createUserUseCase,
  getAllUsersUseCase,
  getUserByIdUseCase,
  updateUserUseCase,
  deleteUserUseCase
);

const productController = new ProductController(
  createProductUseCase,
  getAllProductsUseCase,
  getProductByIdUseCase,
  updateProductUseCase,
  deleteProductUseCase
);

const orderController = new OrderController(
  createOrderUseCase,
  getAllOrdersUseCase,
  getOrderByIdUseCase,
  updateOrderUseCase,
  deleteOrderUseCase
);

// Setup routes
app.use('/api/users', createUserRoutes(userController));
app.use('/api/products', createProductRoutes(productController));
app.use('/api/orders', createOrderRoutes(orderController));

// Swagger documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

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
