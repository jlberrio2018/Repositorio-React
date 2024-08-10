// src/App.jsx
import React, { useState } from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import './App.css';

function App() {
    const [products] = useState([
        { id: 1, name: 'Taladro', price: 23.999 },
        { id: 2, name: 'Pulidora', price: 20.999 },
        { id: 3, name: 'Mezclador', price: 54.999 },
        { id: 3, name: 'Minicargador', price: 98.999 },
    ]);

    const [cartItems, setCartItems] = useState([]);

    const handleAddToCart = (product) => {
        setCartItems([...cartItems, product]);
    };

    const handleRemoveFromCart = (id) => {
        setCartItems(cartItems.filter(item => item.id !== id));
    };

    return (
        <div className="App">
            <h1>Mi Carrito de Solicitudes</h1>
            <ProductList products={products} onAddToCart={handleAddToCart} />
            <Cart cartItems={cartItems} onRemoveFromCart={handleRemoveFromCart} />
        </div>
    );
}

export default App;
