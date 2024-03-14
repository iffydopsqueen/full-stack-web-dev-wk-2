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
                            <input type="text" value={product.value} onChange={(e) => handleValueChange(product.id, e)} />
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