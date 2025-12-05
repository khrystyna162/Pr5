"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserRoutes = createUserRoutes;
const express_1 = require("express");
function createUserRoutes(userController) {
    const router = (0, express_1.Router)();
    /**
     * @swagger
     * /api/users:
     *   get:
     *     summary: Отримати всіх користувачів
     *     tags: [Users]
     *     responses:
     *       200:
     *         description: Список користувачів
     *         content:
     *           application/json:
     *             schema:
     *               type: array
     *               items:
     *                 type: object
     *                 properties:
     *                   id:
     *                     type: string
     *                   name:
     *                     type: string
     *                   email:
     *                     type: string
     *                   createdAt:
     *                     type: string
     */
    router.get('/', (req, res) => userController.getAll(req, res));
    /**
     * @swagger
     * /api/users/{id}:
     *   get:
     *     summary: Отримати користувача за ID
     *     tags: [Users]
     *     parameters:
     *       - in: path
     *         name: id
     *         required: true
     *         schema:
     *           type: string
     *     responses:
     *       200:
     *         description: Користувач знайдено
     *       404:
     *         description: Користувача не знайдено
     */
    router.get('/:id', (req, res) => userController.getById(req, res));
    /**
     * @swagger
     * /api/users:
     *   post:
     *     summary: Створити нового користувача
     *     tags: [Users]
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             required:
     *               - name
     *               - email
     *             properties:
     *               name:
     *                 type: string
     *               email:
     *                 type: string
     *     responses:
     *       201:
     *         description: Користувача створено
     */
    router.post('/', (req, res) => userController.create(req, res));
    /**
     * @swagger
     * /api/users/{id}:
     *   put:
     *     summary: Оновити користувача
     *     tags: [Users]
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
     *               email:
     *                 type: string
     *     responses:
     *       200:
     *         description: Користувача оновлено
     *       404:
     *         description: Користувача не знайдено
     */
    router.put('/:id', (req, res) => userController.update(req, res));
    /**
     * @swagger
     * /api/users/{id}:
     *   delete:
     *     summary: Видалити користувача
     *     tags: [Users]
     *     parameters:
     *       - in: path
     *         name: id
     *         required: true
     *         schema:
     *           type: string
     *     responses:
     *       204:
     *         description: Користувача видалено
     *       404:
     *         description: Користувача не знайдено
     */
    router.delete('/:id', (req, res) => userController.delete(req, res));
    return router;
}
