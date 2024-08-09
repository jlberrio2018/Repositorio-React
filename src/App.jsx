// src/App.jsx
import React, { useState } from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import './App.css';

function App() {
    const [products] = useState([
        { id: 1, name: 'Product 1', price: 10 },
        { id: 2, name: 'Product 2', price: 20 },
        { id: 3, name: 'Product 3', price: 30 },
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
            <h1>Mi Carrito de Compras</h1>
            <ProductList products={products} onAddToCart={handleAddToCart} />
            <Cart cartItems={cartItems} onRemoveFromCart={handleRemoveFromCart} />
        </div>
    );
}

export default App;
