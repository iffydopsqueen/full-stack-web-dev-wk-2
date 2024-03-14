import React, { useState } from "react";
import { Modal } from "react-bootstrap";

const DisplayProducts = ({ products, handleValueChange }) => {
    const [show, setShow] = useState(false);
    const [showImge, setShowImge] = useState({});

    const handleClose = () => setShow(false);
    const handleShow = (product) => {
        setShow(true);
        setShowImge(product);
    };

    return (
        <div className="product-list">
            {products.map((product) => (
                <div key={product.id} className="product-item">
                    <div className="product-description">
                        {product.desc}
                    </div>
                    <div className="product-content">
                        {/* The event attribute 'handleShow' calls the show handler */}
                        <img src={product.image} alt={product.desc} onClick={() => handleShow(product)} />
                        <div className="product-value">
                            <button onClick={() => handleValueChange(product.id, { target: { value: product.value - 1 }})}>-</button>
                            <button onClick={() => handleValueChange(product.id, { target: { value: product.value + 1 }})}>+</button>
                            <input type="text" value={product.value} readOnly/>    {/* disabled the input field */}
                            <span> quantity</span>
                        </div>
                    </div>
                </div>
            ))}
            {/* Creating the 'modal' component */}
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{showImge.desc}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <img 
                        src={showImge.image} 
                        width="350"
                        alt={showImge.desc}
                        className="mx-5"
                    />
                    <p><span className="text-dark">Ratings:</span> {showImge.ratings}/5</p>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default DisplayProducts;