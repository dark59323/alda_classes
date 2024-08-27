-- Conectar a la base de datos
\c alda_clases;

-- Crear tabla de usuarios
CREATE TABLE users (
                       user_id SERIAL PRIMARY KEY,
                       name VARCHAR(100) NOT NULL,
                       email VARCHAR(255) UNIQUE NOT NULL,
                       password TEXT NOT NULL,
                       role VARCHAR(50) CHECK (role IN ('student', 'teacher', 'admin')) NOT NULL,
                       created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

-- Crear tabla de profesores
CREATE TABLE teachers (
                          teacher_id SERIAL PRIMARY KEY,
                          user_id INT REFERENCES users(user_id) ON DELETE CASCADE,
                          bio TEXT,
                          rating DECIMAL(3, 2) CHECK (rating >= 0 AND rating <= 5)
);

-- Crear tabla de clases
CREATE TABLE classes (
                         class_id SERIAL PRIMARY KEY,
                         teacher_id INT REFERENCES teachers(teacher_id) ON DELETE SET NULL,
                         title VARCHAR(100) NOT NULL,
                         description TEXT,
                         price DECIMAL(10, 2) NOT NULL,
                         duration INT NOT NULL,
                         created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

-- Crear tabla de reservas de clases
CREATE TABLE class_bookings (
                                booking_id SERIAL PRIMARY KEY,
                                class_id INT REFERENCES classes(class_id) ON DELETE CASCADE,
                                user_id INT REFERENCES users(user_id) ON DELETE CASCADE,
                                scheduled_at TIMESTAMPTZ NOT NULL,
                                status VARCHAR(50) CHECK (status IN ('pending', 'confirmed', 'completed', 'cancelled')) DEFAULT 'pending',
                                created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

-- Crear tabla de carrito de compras
CREATE TABLE shopping_cart (
                               cart_id SERIAL PRIMARY KEY,
                               user_id INT REFERENCES users(user_id) ON DELETE CASCADE,
                               created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
                               updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

-- Crear tabla de items del carrito
CREATE TABLE cart_items (
                            item_id SERIAL PRIMARY KEY,
                            cart_id INT REFERENCES shopping_cart(cart_id) ON DELETE CASCADE,
                            class_id INT REFERENCES classes(class_id) ON DELETE CASCADE,
                            quantity INT DEFAULT 1 CHECK (quantity > 0)
);

-- Crear tabla de pagos
CREATE TABLE payments (
                          payment_id SERIAL PRIMARY KEY,
                          user_id INT REFERENCES users(user_id) ON DELETE CASCADE,
                          amount DECIMAL(10, 2) NOT NULL,
                          status VARCHAR(50) CHECK (status IN ('pending', 'completed', 'failed')) DEFAULT 'pending',
                          payment_method VARCHAR(50),
                          created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

-- Insertar registros en la tabla de usuarios
INSERT INTO users (name, email, password, role)
VALUES
    ('Juan Pérez', 'juan.perez@example.com', 'password123', 'student'),
    ('Ana Gómez', 'ana.gomez@example.com', 'password456', 'teacher'),
    ('Carlos Ruiz', 'carlos.ruiz@example.com', 'password789', 'admin');

-- Insertar registros en la tabla de profesores
INSERT INTO teachers (user_id, bio, rating)
VALUES
    (2, 'Profesora de matemáticas con 10 años de experiencia.', 4.8),
    (3, 'Experto en desarrollo web con enfoque en frontend.', 4.5);

-- Insertar registros en la tabla de clases
INSERT INTO classes (teacher_id, title, description, price, duration)
VALUES
    (1, 'Introducción a las Matemáticas', 'Curso básico de matemáticas para principiantes.', 30.00, 60),
    (2, 'Desarrollo Web Frontend', 'Curso de desarrollo web con enfoque en tecnologías frontend.', 50.00, 120),
    (2, 'JavaScript Avanzado', 'Curso avanzado de JavaScript para desarrolladores intermedios y avanzados.', 40.00, 90);

-- Insertar registros en la tabla de reservas de clases
INSERT INTO class_bookings (class_id, user_id, scheduled_at, status)
VALUES
    (1, 1, '2024-09-01 10:00:00', 'confirmed'),
    (2, 1, '2024-09-02 14:00:00', 'pending'),
    (3, 1, '2024-09-03 16:00:00', 'pending');

-- Insertar registros en la tabla de carrito de compras
INSERT INTO shopping_cart (user_id)
VALUES
    (1),
    (2),
    (3);

-- Insertar registros en la tabla de items del carrito
INSERT INTO cart_items (cart_id, class_id, quantity)
VALUES
    (1, 1, 1),
    (1, 2, 1),
    (2, 3, 1);

-- Insertar registros en la tabla de pagos
INSERT INTO payments (user_id, amount, status, payment_method)
VALUES
    (1, 80.00, 'completed', 'credit_card'),
    (2, 40.00, 'pending', 'paypal'),
    (3, 100.00, 'failed', 'bank_transfer');
