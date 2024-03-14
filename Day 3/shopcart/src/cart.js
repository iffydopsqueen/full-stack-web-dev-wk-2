import React from "react";

const Cart = ({ products }) => {
    return (
        <div>
           <h2 className="cart-heading">Your Cart Items</h2>
            <div className="cart">
                <ul>
                    {products.map((product) => (
                        <li key={product.id}>
                            {product.desc} - Quantity: {product.value}
                        </li>
                    ))}
                </ul>
            </div> 
        </div>
    );
};

export default Cart;