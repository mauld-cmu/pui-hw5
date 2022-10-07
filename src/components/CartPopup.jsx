import React, { Component } from 'react';
import './CartPopup.css';

class CartPopup extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // Conditional Rendering
    if (!this.props.showCartPopup) {
      return null;
    }
    return (
      <div id="cart-popup">
        <p>Added to cart:</p>
        <p id="cart-roll-name">{this.props.currentRoll.displayName}</p>
        <p id="cart-glaze-name">{this.props.currentRoll.glazeName}</p>
        <p id="cart-pack-size">Pack of {this.props.currentRoll.packSizeName}</p>
        <p id="cart-pack-price">Price: {this.props.priceFormatter(this.props.currentRoll.price)}</p>
      </div>
    );
  }
}

export default CartPopup;