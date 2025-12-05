import swaggerJsdoc from 'swagger-jsdoc';

const options: swaggerJsdoc.Options = {
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

export const swaggerSpec = swaggerJsdoc(options);
