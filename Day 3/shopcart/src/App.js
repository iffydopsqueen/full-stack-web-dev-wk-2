// Required Library Components 
import "./styles.css";
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        {
          id: 1,
          image: "./products/cologne.jpg",
          desc: "Unisex Cologne",
          value: 0
        },
        {
          id: 2,
          image: "./products/iwatch.jpg",
          desc: "Apple iWatch",
          value: 0
        },
        {
          id: 3,
          image: "./products/mug.jpg",
          desc: "Unique Mug",
          value: 0
        },
        {
          id: 4,
          image: "./products/wallet.jpg",
          desc: "Mens Wallet",
          value: 0
        }
      ],
      totalQuantity: 0 // Initialize total quantity - keep track of the total quantity
    };
  }

  componentDidMount() {
    this.calculateTotalQuantity(); // Calculate total quantity on mount
  }

  // Function to calculate total quantity
  calculateTotalQuantity = () => {
    const { products } = this.state;
    const totalQuantity = products.reduce((total, product) => total + product.value, 0);
    this.setState({ totalQuantity });
  };

  // Function to handle changes in the input field's value
  handleValueChange = (productId, e) => {
    const { value } = e.target;
    const { products } = this.state;
    
    // Updates the state with the new value entered by the user
    const updatedProducts = products.map(product => {
      if (product.id === productId) {
        return { ...product, value: parseInt(value) || 0 }; // Ensure value is a number
      }
      return product;
    });

    this.setState({ products: updatedProducts }, () => {
      this.calculateTotalQuantity(); // Recalculate total quantity after value change
    });
  };

  render() {
    const { products, totalQuantity } = this.state;

    return (
      <div className="App">
        <header className="App-header"> 
        <h1>Shop to React</h1>
        <div className="cart-icon">
          <FontAwesomeIcon icon={faShoppingCart} /> 
          <span> {totalQuantity}</span>    {/* Display total quantity */}
          <span> items</span>
        </div>
        </header>
        <div className="product-list">
          {products.map((product) => (
            <div key={product.id} className="product-item">
              <div className="product-description">{product.desc}</div>
              <div className="product-content">
                <img src={product.image} alt={product.desc} />
                <div className="product-value">
                  <input
                      type="text"
                      value={product.value}
                      onChange={(e) => this.handleValueChange(product.id, e)} />
                      {/* The 'onChange' event listener is attached to the input field to call the 
                      'handleValueChange' function whenever the input value changes */}
                  <span> quantity</span>
                </div>
              </div>
            </div>
          ))}
          </div>
      </div>
    );
  }
}

export default App;
