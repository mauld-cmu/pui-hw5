import React, { Component } from 'react';
import './Cart.css';

class Cart extends Component {
  constructor(props) {
    super(props);
  }

  render() { 
    return (  
      <div id="cart">
        <hr />
        <div id="cart-contents">
          { this.props.cart.length !== 0 &&
            <div id="filled-cart">
              <span id="item-count">Shopping Cart ({this.props.cartAmountDisplay})</span>
              <span id="item-total">{this.props.cartTotalDisplay}</span>
              <div id="cart-grid">
                { this.props.populateCartGrid() }
              </div>
            </div>
          }
          { this.props.cart.length === 0 &&
            <div id="empty-cart">
              <p id="empty-cart-msg">The cart is empty!</p>
            </div>
          }
        </div>
        <hr/>
      </div>
    );
  }
}

export default Cart;