// src/components/Product.jsx
import React from 'react';

function Product({ product, onAddToCart }) {
    return (
        <div className="product">
            <h2>{product.name}</h2>
            <p>{product.price} COP/H</p>
            <button className="add-to-cart-btn" onClick={() => onAddToCart(product)}>Agregar a Carrito</button>
        </div>
    );
}

export default Product;
