import React, { Component } from 'react';
import './NavBar.css';
import CartPopup from './CartPopup';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  render() {
    return (
      <nav>
        <div id="products-nav">
          <span>PRODUCTS</span>
        </div>
        <div id="cart-nav">
          <span>CART</span>
          <p id="cart-count">{this.props.cartAmount}</p>
          <p id="cart-price">{this.props.cartTotal}</p>
          <CartPopup 
            currentRoll={this.props.currentRoll}
            priceFormatter={this.props.priceFormatter}
            showCartPopup={this.props.showCartPopup}
          />
        </div>
      </nav>
    );
  }
  
}

export default NavBar;