import React from "react";

const DisplayProducts = ({ products, handleValueChange }) => {
    return (
        <div className="product-list">
            {products.map((product) => (
                <div key={product.id} className="product-item">
                    <div className="product-description">
                        {product.desc}
                    </div>
                    <div className="product-content">
                        <img src={product.image} alt={product.desc} />
                        <div className="product-value">
                            <input type="text" value={product.value} onChange={(e) => handleValueChange(product.id, e)} />
                            <span> quantity</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default DisplayProducts;