"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createProductRoutes = createProductRoutes;
const express_1 = require("express");
function createProductRoutes(productController) {
    const router = (0, express_1.Router)();
    /**
     * @swagger
     * /api/products:
     *   get:
     *     summary: Отримати всі продукти
     *     tags: [Products]
     *     responses:
     *       200:
     *         description: Список продуктів
     */
    router.get('/', (req, res) => productController.getAll(req, res));
    /**
     * @swagger
     * /api/products/{id}:
     *   get:
     *     summary: Отримати продукт за ID
     *     tags: [Products]
     *     parameters:
     *       - in: path
     *         name: id
     *         required: true
     *         schema:
     *           type: string
     *     responses:
     *       200:
     *         description: Продукт знайдено
     *       404:
     *         description: Продукт не знайдено
     */
    router.get('/:id', (req, res) => productController.getById(req, res));
    /**
     * @swagger
     * /api/products:
     *   post:
     *     summary: Створити новий продукт
     *     tags: [Products]
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             required:
     *               - name
     *               - price
     *               - description
     *             properties:
     *               name:
     *                 type: string
     *               price:
     *                 type: number
     *               description:
     *                 type: string
     *     responses:
     *       201:
     *         description: Продукт створено
     */
    router.post('/', (req, res) => productController.create(req, res));
    /**
     * @swagger
     * /api/products/{id}:
     *   put:
     *     summary: Оновити продукт
     *     tags: [Products]
     *     parameters:
     *       - in: path
     *         name: id
     *         required: true
     *         schema:
     *           type: string
     *     requestBody:
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             properties:
     *               name:
     *                 type: string
     *               price:
     *                 type: number
     *               description:
     *                 type: string
     *     responses:
     *       200:
     *         description: Продукт оновлено
     *       404:
     *         description: Продукт не знайдено
     */
    router.put('/:id', (req, res) => productController.update(req, res));
    /**
     * @swagger
     * /api/products/{id}:
     *   delete:
     *     summary: Видалити продукт
     *     tags: [Products]
     *     parameters:
     *       - in: path
     *         name: id
     *         required: true
     *         schema:
     *           type: string
     *     responses:
     *       204:
     *         description: Продукт видалено
     *       404:
     *         description: Продукт не знайдено
     */
    router.delete('/:id', (req, res) => productController.delete(req, res));
    return router;
}
