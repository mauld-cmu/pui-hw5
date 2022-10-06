import React, { Component } from 'react';
import './Cart.css';

class Cart extends Component {
  constructor(props) {
    super(props);
  }
  state = {  }
  render() { 
    return (  
      <div id="cart">
        <hr />
        <div id="cart-contents">
          {/* <div id="filled-cart">
            <span>Shopping Cart (0 items)</span>
            <span>Total: $0.00</span>
          </div> */}
          <div id="empty-cart">
            <p id="empty-cart-msg">The cart is empty!</p>
          </div>
        </div>
        <hr/>
      </div>
    );
  }
}
 
export default Cart;