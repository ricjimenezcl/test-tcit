test TCIT
Nombre: Ricardo Jimenez

1. Clonar el repositorio 


https://github.com/ricjimenezcl/test-tcit.git  (Rama master)

2. Instalar dependencias

# Backend (desde la raíz del proyecto)
cd backend
npm install

# Frontend (desde la raíz del proyecto)
cd ../frontend
npm install

3. Configurar variables de entorno

Crea un archivo .env en la raíz del backend:

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


Crea un archivo .env en la raíz del frontend:

# ======================================
# CONFIGURACIÓN GENERAL
# ======================================
VITE_API_URL=http://localhost:5000/api/posts



4. Configuración de PostgreSQL:
 crear bd tcit_dev

CREATE DATABASE tcit_dev
    WITH 
    OWNER = postgres  
    ENCODING = 'UTF8'
    LC_COLLATE = 'en_US.UTF-8'
    LC_CTYPE = 'en_US.UTF-8'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1;
	
CREATE TABLE posts (
    id serial PRIMARY KEY,
    name varchar(255) NOT NULL,
    description text,
    updated_at timestamptz NOT NULL DEFAULT CURRENT_TIMESTAMP,
    created_at timestamptz NOT NULL DEFAULT CURRENT_TIMESTAMP
);



5. Ejecutar migraciones:

cd backend

npx sequelize-cli db:migrate


6. Ejecutar el Proyecto

cd backend
npm run dev

cd frontend
npm run dev


endpoint

GET http://localhost:5000/api/posts - Listar todos los posts

POST http://localhost:5000/api/posts - Crear nuevo post

DELETE http://localhost:5000/api/posts/:id - Eliminar post
