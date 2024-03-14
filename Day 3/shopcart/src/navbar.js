import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Navbar = ({ totalQuantity }) => {
    return (
        <header className="App-header">
            <Link to="/" className="nav-link">
                <h1>Shop 2 React</h1>
            </Link>
            <div className="cart-icon">
                <Link to="/cart" className="nav-link">
                    <FontAwesomeIcon icon={faShoppingCart} />
                    <span> {totalQuantity}</span>  {/* Display total quantity */}
                    <span> items</span>
                </Link>
            </div>
        </header>
    );
};

export default Navbar;