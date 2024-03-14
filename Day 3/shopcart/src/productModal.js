import React from "react";

const ProductModal = ({ product, closeModal }) => {
    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={closeModal}>&times;</span>
                <h2>{product.desc}</h2>
                <img src={product.image} alt={product.desc} />
                <p>Ratings: {product.ratings}</p>
            </div>
        </div>
    );
};

export default ProductModal;