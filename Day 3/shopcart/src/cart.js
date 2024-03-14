import React from "react";

const Cart = ({ products }) => {
    return (
        <div className="cart">
            <h2>Cart</h2>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        {product.desc} - Quantity: {product.value}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Cart;