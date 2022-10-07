import React, { Component } from 'react';
import './RollCard.css';
import { glazingData, packData } from '../data/ShopData';

class RollCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      glazing: "keepOriginal",
      packSize: "onePack",
      price: this.props.rollDatum.basePrice
    };
  }

  // Gets data from the forms, creates a roll Object and updates state
  pullFormData = (event) => {
    if (event.target.type === 'radio') {
      this.setState(prevState => ({
        ...prevState,
        packSize: event.target.value,
        price: (this.props.rollDatum.basePrice + glazingData[prevState.glazing].price)*packData[event.target.value].priceMultiplier
      }))
    }
    if (event.target.type === 'select-one') {
      this.setState(prevState => ({
        ...prevState,
        glazing: event.target.value,
        price: (this.props.rollDatum.basePrice + glazingData[event.target.value].price) * packData[prevState.packSize].priceMultiplier
      }))
    }
  }

  // Tells the parent to add the Roll Component's Roll to the cart
  addToParentCart = (event) => {
    this.props.addToCart(
      this.props.createRoll(this.props.rollKey, this.state.glazing, this.state.packSize)
    );
  }

  render() { 
    return (
      <article className="product-card">
        <img className="product" src={process.env.PUBLIC_URL + this.props.rollDatum.imageURL} alt={this.props.rollDatum.imageAlt} width="280"/>
        <h3>{this.props.rollDatum.displayName}</h3>

        <form onChange={this.pullFormData}>
          <div className="row-glazing">
            <span>Glazing:</span>
            <select className="select-glaze" name="glaze">
              <option value="keepOriginal">Keep original</option>
              <option value="sugarMilk">Sugar milk</option>
              <option value="vanillaMilk">Vanilla milk</option>
              <option value="doubleChocolate">Double chocolate</option>
            </select>
          </div>

          <div className="row-pack">
            <span>Pack Size:</span>
            <div>
              <label>
                <input type="radio" value="onePack" name="pack" defaultChecked/>
                <span style={{ backgroundColor: this.state.packSize === 'onePack' ? 'lightgray' : 'white' }}>1</span>
              </label>
              <label>
                <input type="radio" value="threePack" name="pack"/>
                <span style={{ backgroundColor: this.state.packSize === 'threePack' ? 'lightgray' : 'white' }}>3</span>
              </label>
              <label>
                <input type="radio" value="sixPack" name="pack"/>
                <span style={{ backgroundColor: this.state.packSize === 'sixPack' ? 'lightgray' : 'white' }}>6</span>
              </label>
              <label>
                <input type="radio" value="twelvePack" name="pack"/>
                <span style={{ backgroundColor: this.state.packSize === 'twelvePack' ? 'lightgray' : 'white' }}>12</span>
              </label>
            </div>
          </div>
        </form>

        <div className="row-cart">
          <span id="price">{this.props.priceFormatter(this.state.price)}</span>
          <button id="add-button" onClick={this.addToParentCart}>Add to Cart</button>
        </div>
      </article>
    );
  }
}

export default RollCard;