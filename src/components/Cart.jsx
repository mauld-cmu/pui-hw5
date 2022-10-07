import React, { Component } from 'react';
import './Cart.css';
import CartCard from '../components/CartCard';

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
          { this.props.cart.length !== 0 &&
            <div id="filled-cart">
              <span id="item-count">Shopping Cart ({this.props.cartAmountDisplay})</span>
              <span id="item-total">{this.props.cartTotalDisplay}</span>
              <div id="cart-grid">
                {
                  this.props.cart.map( (roll, index) => 
                    <CartCard
                      key={index}
                      name={roll.name}
                      displayName={roll.displayName}
                      glazeName={roll.glazeName}
                      packSizeName={roll.packSizeName}
                      priceString={this.props.priceFormatter(roll.price)}
                    />
                  )
                }
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