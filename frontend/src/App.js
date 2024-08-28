import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TeacherPage from './pages/TeacherPage';
import CartItemPage from './pages/CartItemPage';
import BookingPage from './pages/BookingPage';
import ClassPage from './pages/ClassPage';
import PaymentPage from './pages/PaymentPage';
import ShoppingCartPage from './pages/ShoppingCartPage';
import HomePage from './pages/HomePage'; 


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} /> 
                <Route path="/teachers" element={<TeacherPage />} />
                <Route path="/cart-items" element={<CartItemPage />} />
                <Route path="/bookings" element={<BookingPage />} />
                <Route path="/classes" element={<ClassPage />} />
                <Route path="/payments" element={<PaymentPage />} />
                <Route path="/shopping-carts" element={<ShoppingCartPage />} />
            </Routes>
        </Router>
    );
}

export default App;
