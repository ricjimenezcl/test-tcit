# Test TCIT

**Nombre:** Ricardo Jiménez

---

## 1. Clonar el repositorio

```bash
git clone https://github.com/ricjimenezcl/test-tcit.git
cd test-tcit  # Rama: master
```

---

## 2. Instalar dependencias

### Backend

```bash
cd backend
npm install
```

### Frontend

```bash
cd ../frontend
npm install
```

---

## 3. Configurar variables de entorno

### Backend

Crea un archivo `.env` en la raíz del backend con el siguiente contenido:

```env
# ======================================
# CONFIGURACIÓN GENERAL
# ======================================
NODE_ENV=development
PORT=5000

# ======================================
# BASE DE DATOS (PostgreSQL)
# ======================================
DB_USER=postgres
DB_PASSWORD=ocupar la existente
DB_NAME=tcit_dev
DB_HOST=127.0.0.1
DB_PORT=5432
DIALECT=postgres

# ======================================
# CONFIGURACIÓN DE CORS
# ======================================
CORS_ORIGIN=http://localhost:5173
CORS_METHODS=GET,POST,DELETE

# ======================================
# LOGGING
# ======================================
LOG_LEVEL=debug
SQL_LOGGING=true
```

### Frontend

Crea un archivo `.env` en la raíz del frontend con el siguiente contenido:

```env
# ======================================
# CONFIGURACIÓN GENERAL
# ======================================
VITE_API_URL=http://localhost:5000/api/posts
```

---

## 4. Configuración de PostgreSQL

Crear la base de datos `tcit_dev`:

```sql
CREATE DATABASE tcit_dev
    WITH 
    OWNER = postgres  
    ENCODING = 'UTF8'
    LC_COLLATE = 'en_US.UTF-8'
    LC_CTYPE = 'en_US.UTF-8'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1;
```

Crear la tabla `posts`:

```sql
CREATE TABLE posts (
    id serial PRIMARY KEY,
    name varchar(255) NOT NULL,
    description text,
    updated_at timestamptz NOT NULL DEFAULT CURRENT_TIMESTAMP,
    created_at timestamptz NOT NULL DEFAULT CURRENT_TIMESTAMP
);
```

---

## 5. Ejecutar migraciones

```bash
cd backend
npx sequelize-cli db:migrate
```

---

## 6. Ejecutar el Proyecto

### Backend

```bash
cd backend
npm run dev
```

### Frontend

```bash
cd frontend
npm run dev
```

---

## Endpoints

- `GET http://localhost:5000/api/posts` — Listar todos los posts  
- `POST http://localhost:5000/api/posts` — Crear nuevo post  
- `DELETE http://localhost:5000/api/posts/:id` — Eliminar post

---
