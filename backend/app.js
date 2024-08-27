const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const userRoutes = require('./src/routes/userRoutes');
const classRoutes = require('./src/routes/classRoutes');
const paymentRoutes = require('./src/routes/paymentRoutes');
const cartItemRoutes = require('./src/routes/cartItemRoutes');
const classBookingRoutes = require('./src/routes/classBookingRoutes');
const shoppingCartRoutes = require('./src/routes/shoppingCartRoutes');
const teacherRoutes = require('./src/routes/teacherRoutes');

// Middleware
app.use(bodyParser.json());

// Rutas
app.use('/api/users', userRoutes);
app.use('/api/classes', classRoutes);
app.use('/api/payments', paymentRoutes);
app.use('/api/cart-items', cartItemRoutes);
app.use('/api/bookings', classBookingRoutes);
app.use('/api/shopping-carts', shoppingCartRoutes);
app.use('/api/teachers', teacherRoutes);

// Conexión a la base de datos
const { Client } = require('pg');
const client = new Client({
  user: 'dark',
  host: 'localhost',
  database: 'alda_clases',
  password: '1234',
  port: 5432,
});

client.connect().catch(err => console.error('Connection error', err.stack));

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
