import React, { Component } from 'react';
import './Roll.css';

class Roll extends Component {
  constructor(props) {
    super(props);
    this.state = {
      targetRoll: this.props.createRoll(this.props.rollKey, 'keepOriginal', 'onePack')
    };
  }

  // Gets data from the forms, creates a roll Object and updates state
  pullFormData = (event) => {
    if (event.target.type === 'radio') {
      this.setState(prevState => ({
        targetRoll: this.props.createRoll(prevState.targetRoll.name, prevState.targetRoll.glaze, event.target.value)
      }))
    }
    if (event.target.type === 'select-one') {
      this.setState(prevState => ({
        targetRoll: this.props.createRoll(prevState.targetRoll.name, event.target.value, prevState.targetRoll.packSize)
      }))
    }
  }

  // Tells the parent to add the Roll Component's Roll to the cart
  addToParentCart = (event) => {
    this.props.addToCart(this.state.targetRoll);
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
                  <span>1</span>
              </label>
              <label>
                <input type="radio" value="threePack" name="pack"/>
                  <span>3</span>
              </label>
              <label>
                <input type="radio" value="sixPack" name="pack"/>
                  <span>6</span>
              </label>
              <label>
                <input type="radio" value="twelvePack" name="pack"/>
                  <span>12</span>
              </label>
            </div>
          </div>
        </form>

        <div className="row-cart">
          <span id="price">{this.props.priceFormatter(this.state.targetRoll.price)}</span>
          <button onClick={this.addToParentCart}>Add to Cart</button>
        </div>
      </article>
    );
  }
}
 
export default Roll;