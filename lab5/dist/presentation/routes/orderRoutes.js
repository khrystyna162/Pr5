"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createOrderRoutes = createOrderRoutes;
const express_1 = require("express");
function createOrderRoutes(orderController) {
    const router = (0, express_1.Router)();
    /**
     * @swagger
     * /api/orders:
     *   get:
     *     summary: Отримати всі замовлення
     *     tags: [Orders]
     *     responses:
     *       200:
     *         description: Список замовлень
     */
    router.get('/', (req, res) => orderController.getAll(req, res));
    /**
     * @swagger
     * /api/orders/{id}:
     *   get:
     *     summary: Отримати замовлення за ID
     *     tags: [Orders]
     *     parameters:
     *       - in: path
     *         name: id
     *         required: true
     *         schema:
     *           type: string
     *     responses:
     *       200:
     *         description: Замовлення знайдено
     *       404:
     *         description: Замовлення не знайдено
     */
    router.get('/:id', (req, res) => orderController.getById(req, res));
    /**
     * @swagger
     * /api/orders:
     *   post:
     *     summary: Створити нове замовлення
     *     tags: [Orders]
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             required:
     *               - userId
     *               - productId
     *               - quantity
     *               - totalPrice
     *               - status
     *             properties:
     *               userId:
     *                 type: string
     *               productId:
     *                 type: string
     *               quantity:
     *                 type: number
     *               totalPrice:
     *                 type: number
     *               status:
     *                 type: string
     *                 enum: [pending, completed, cancelled]
     *     responses:
     *       201:
     *         description: Замовлення створено
     */
    router.post('/', (req, res) => orderController.create(req, res));
    /**
     * @swagger
     * /api/orders/{id}:
     *   put:
     *     summary: Оновити замовлення
     *     tags: [Orders]
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
     *               quantity:
     *                 type: number
     *               totalPrice:
     *                 type: number
     *               status:
     *                 type: string
     *                 enum: [pending, completed, cancelled]
     *     responses:
     *       200:
     *         description: Замовлення оновлено
     *       404:
     *         description: Замовлення не знайдено
     */
    router.put('/:id', (req, res) => orderController.update(req, res));
    /**
     * @swagger
     * /api/orders/{id}:
     *   delete:
     *     summary: Видалити замовлення
     *     tags: [Orders]
     *     parameters:
     *       - in: path
     *         name: id
     *         required: true
     *         schema:
     *           type: string
     *     responses:
     *       204:
     *         description: Замовлення видалено
     *       404:
     *         description: Замовлення не знайдено
     */
    router.delete('/:id', (req, res) => orderController.delete(req, res));
    return router;
}
