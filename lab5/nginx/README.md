# Налаштування Nginx з BasicAuth

## Створення файлу паролів

Для створення файлу `.htpasswd` з користувачем та паролем використовуйте утиліту `htpasswd`:

```bash
# Встановіть apache2-utils (на Ubuntu/Debian) або httpd-tools (на CentOS/RHEL)
sudo apt-get install apache2-utils

# Створіть файл .htpasswd з користувачем admin
sudo htpasswd -c /etc/nginx/.htpasswd admin
```

Введіть пароль для користувача `admin` (наприклад: `password123`).

## Запуск Nginx

```bash
# Скопіюйте конфігурацію
sudo cp nginx/nginx.conf /etc/nginx/nginx.conf

# Перевірте конфігурацію
sudo nginx -t

# Перезапустіть Nginx
sudo systemctl restart nginx
```

## Тестування

Тепер при спробі доступу до `/api-docs` буде вимагатися Basic Authentication:
- Username: admin
- Password: password123

Звичайні API ендпоїнти (`/api/users`, `/api/products`, `/api/orders`) залишаються доступними без аутентифікації.
