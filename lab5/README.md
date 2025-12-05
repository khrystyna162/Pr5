# Лабораторна робота №5
## CRUD REST API з шаровою архітектурою та Swagger документацією

REST API з повною CRUD функціональністю, реалізований з використанням шарової архітектури (Domain, Application, Infrastructure, Presentation) та автоматичною генерацією документації через Swagger.

---

## Особливості

- Шарова архітектура (Domain, Application, Infrastructure, Presentation)
- 3 сутності з зв'язками (Users, Products, Orders)
- Повна CRUD функціональність для всіх сутностей
- Автоматична генерація документації через Swagger
- Захист документації через Nginx та BasicAuth
- TypeScript для типобезпеки
- In-memory сховище даних

---

## Передумови

- Node.js (версія 18 або новіша)
- npm або yarn
- (Опціонально) Nginx для захисту документації

---

## Встановлення

1. Клонуйте репозиторій або розпакуйте архів:
```bash
cd lab5
```

2. Встановіть залежності:
```bash
npm install
```

---

## Запуск

### Режим розробки
```bash
npm run dev
```

### Production збірка
```bash
npm run build
npm start
```

Сервер запуститься на `http://localhost:3000`

---

## API Endpoints

### Users (Користувачі)
- `GET /api/users` - отримати всіх користувачів
- `GET /api/users/:id` - отримати користувача за ID
- `POST /api/users` - створити користувача
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com"
  }
  ```
- `PUT /api/users/:id` - оновити користувача
- `DELETE /api/users/:id` - видалити користувача

### Products (Продукти)
- `GET /api/products` - отримати всі продукти
- `GET /api/products/:id` - отримати продукт за ID
- `POST /api/products` - створити продукт
  ```json
  {
    "name": "Laptop",
    "price": 999.99,
    "description": "High-performance laptop"
  }
  ```
- `PUT /api/products/:id` - оновити продукт
- `DELETE /api/products/:id` - видалити продукт

### Orders (Замовлення)
- `GET /api/orders` - отримати всі замовлення
- `GET /api/orders/:id` - отримати замовлення за ID
- `POST /api/orders` - створити замовлення
  ```json
  {
    "userId": "1",
    "productId": "1",
    "quantity": 2,
    "totalPrice": 1999.98,
    "status": "pending"
  }
  ```
- `PUT /api/orders/:id` - оновити замовлення
- `DELETE /api/orders/:id` - видалити замовлення

---

## Документація API

Swagger документація доступна за адресою:
```
http://localhost:3000/api-docs
```

Документація автоматично генерується з JSDoc коментарів у файлах роутів та надає:
- Інтерактивний інтерфейс для тестування API
- Опис всіх ендпоїнтів
- Схеми запитів та відповідей
- Можливість виконувати запити безпосередньо з браузера

---

## Захист документації через Nginx

Для захисту ендпоїнту `/api-docs` можна використати Nginx з BasicAuth.

### Налаштування:

1. Встановіть Nginx та apache2-utils:
```bash
sudo apt-get install nginx apache2-utils
```

2. Створіть файл паролів:
```bash
sudo htpasswd -c /etc/nginx/.htpasswd admin
```

3. Скопіюйте конфігурацію Nginx:
```bash
sudo cp nginx/nginx.conf /etc/nginx/nginx.conf
```

4. Перевірте та перезапустіть Nginx:
```bash
sudo nginx -t
sudo systemctl restart nginx
```

Тепер документація буде доступна через Nginx на порту 80 з BasicAuth захистом.

Детальні інструкції: `nginx/README.md`

---

## Структура проекту

```
lab5/
├── src/
│   ├── domain/              # Domain Layer
│   │   ├── entities/        # Сутності бізнес-логіки
│   │   └── repositories/    # Інтерфейси репозиторіїв
│   ├── infrastructure/      # Infrastructure Layer
│   │   └── repositories/    # Реалізації репозиторіїв
│   ├── application/         # Application Layer
│   │   └── use-cases/       # Use cases (бізнес-логіка)
│   ├── presentation/        # Presentation Layer
│   │   ├── controllers/     # HTTP контролери
│   │   └── routes/          # Роути з Swagger анотаціями
│   ├── config/              # Конфігурація
│   │   └── swagger.ts       # Налаштування Swagger
│   └── index.ts             # Точка входу
├── nginx/                   # Конфігурація Nginx
│   ├── nginx.conf
│   └── README.md
├── package.json
├── tsconfig.json
├── README.md
└── REPORT.md               # Звіт про лабораторну роботу
```

---

## Приклади використання

### Створення користувача
```bash
curl -X POST http://localhost:3000/api/users \
  -H "Content-Type: application/json" \
  -d '{"name":"John Doe","email":"john@example.com"}'
```

### Отримання всіх продуктів
```bash
curl http://localhost:3000/api/products
```

### Створення замовлення
```bash
curl -X POST http://localhost:3000/api/orders \
  -H "Content-Type: application/json" \
  -d '{
    "userId":"1",
    "productId":"1",
    "quantity":2,
    "totalPrice":1999.98,
    "status":"pending"
  }'
```

---

## Технології

- **Node.js** - runtime середовище
- **TypeScript** - мова програмування
- **Express.js** - веб-фреймворк
- **Swagger/OpenAPI** - документація API
- **swagger-jsdoc** - генерація Swagger специфікації
- **swagger-ui-express** - UI для документації
- **Nginx** - reverse proxy та захист

---

## Архітектура

Проект використовує шарову архітектуру:

1. **Domain Layer** - містить сутності та інтерфейси репозиторіїв
2. **Infrastructure Layer** - реалізації репозиторіїв та взаємодія з БД
3. **Application Layer** - use cases з бізнес-логікою
4. **Presentation Layer** - HTTP контролери та роути

Така архітектура забезпечує:
- Розділення відповідальності
- Легке тестування
- Простоту підтримки
- Масштабованість

---

## Автор

Виконано в рамках лабораторної роботи №5

## Ліцензія

ISC
