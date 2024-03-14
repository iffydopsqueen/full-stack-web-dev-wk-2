import React, { useState } from "react";
import ProductModal from "./productModal";

const DisplayProducts = ({ products, handleValueChange }) => {
    const [activeProduct, setActiveProduct] = useState(null);

    const openModal = (product) => {
        setActiveProduct(product);
    };

    const closeModal = () => {
        setActiveProduct(null);
    };

    return (
        <div className="product-list">
            {products.map((product) => (
                <div key={product.id} className="product-item">
                    <div className="product-description">
                        {product.desc}
                    </div>
                    <div className="product-content">
                        <img src={product.image} alt={product.desc} onClick={() => openModal(product)} />
                        <div className="product-value">
                            <button onClick={() => handleValueChange(product.id, { target: { value: product.value - 1 }})}>-</button>
                            <button onClick={() => handleValueChange(product.id, { target: { value: product.value + 1 }})}>+</button>
                            <input type="text" value={product.value} readOnly/>    {/* disabled the input field */}
                            <span> quantity</span>
                        </div>
                    </div>
                </div>
            ))}
            {activeProduct && 
                <ProductModal 
                    product={activeProduct} 
                    closeModal={closeModal} 
                />}
        </div>
    );
};

export default DisplayProducts;