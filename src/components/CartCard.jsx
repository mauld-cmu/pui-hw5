import React, { Component } from 'react';
import './CartCard.css';
import { rollData } from '../data/ShopData'

class CartCard extends Component {
  constructor(props) {
    super(props);
  }
  state = {  }

  deleteFromCart = (event) => {
    this.props.removeFromCartByIndex(this.props.index);
  }

  render() { 
    return ( 
      <article className="cart-card">
        <div className="row-image">
          <img className="product" src={process.env.PUBLIC_URL + rollData[this.props.name].imageURL} alt={rollData[this.props.name].imageAlt} width="140" />
        </div>
        <div className="rows-text">
          <p>{this.props.displayName}</p>
          <p>Glazing: {this.props.glazeName}</p>
          <p>Pack Size: {this.props.packSizeName} </p>
          <p className="cart-price">{this.props.priceString}</p>
          <button className="remove-button" onClick={this.deleteFromCart}>Remove</button>
        </div>
      </article>
    );
  }
}

export default CartCard;