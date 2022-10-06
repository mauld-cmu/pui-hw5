import React, { Component } from 'react';
import './NavBar.css';
import CartPopup from './CartPopup';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  toggleParentCart = (event) => {
    this.props.toggleCart();
  }

  render() {
    return (
      <nav>
        <div id="products-nav">
          <span>PRODUCTS</span>
        </div>
        <div id="cart-nav">
          <span onClick={this.toggleParentCart}>CART</span>
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