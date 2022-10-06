import React, { Component } from 'react';
import './Homepage.css';
import logo from './logo-01.svg';
import NavBar from '../../components/NavBar';
import Cart from '../../components/Cart';
import RollCard from '../../components/RollCard';
import { rollData, glazingData, packData } from '../../data/ShopData';

class RollObj {
  constructor(name, glaze, packSize) {
    // types can be "original", "apple", "raisin", "walnut", "chocolate", or "strawberry"
    this.name = name;
    this.displayName = rollData[this.name].displayName;

    // glazing can be "keepOriginal", "sugarMilk", "vanillaMilk", "doubleChocolate"
    this.glaze = glaze;
    this.glazeName = glazingData[this.glaze].displayName;

    // packSize can be "onePack", "threePack", "sixPack", or "twelvePack"
    this.packSize = packSize;
    this.packSizeName = packData[this.packSize].displayNumber;
    
    // calculates price 
    this.price = (rollData[this.name].basePrice + glazingData[this.glaze].price) * packData[this.packSize].priceMultiplier;
  }
}

class Homepage extends Component {
  constructor(props) {
    console.log(rollData);
    super(props);
    this.state = {
      currentRoll: new RollObj('original', 'keepOriginal', 'onePack'),
      cart: [],
      cartAmount: "0 items",
      cartTotal: "Total: $0.00",
      showCart: false,
      showCartPopup: false
    };
    // For Roll
    this.addToCart = this.addToCart.bind(this);
    this.createRoll = this.createRoll.bind(this);
    // For NavBar
    this.displayCartAmount = this.displayCartAmount.bind(this);
    this.displayCartTotal = this.displayCartTotal.bind(this);
    // For CartPopup
    this.closePopup = this.closePopup.bind(this);
    // For Cart
    this.toggleCart = this.toggleCart.bind(this);
  }

  // Formats Floats into USD
  priceFormatter(unformattedPrice) {
    let formatter = new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    });
    return formatter.format(unformattedPrice);
  }

  // Creates a Roll Object given parameters, as to not have to define in children
  createRoll(name, glaze, packSize) {
    return new RollObj(name, glaze, packSize);
  }

  // Adds to cart list, triggers popup, and updates states for Nav Bar
  addToCart(incomingRoll) {
    this.state.cart.push(incomingRoll);
    this.setState({
      currentRoll: incomingRoll
    });
    this.setState({
      showCartPopup: true
    });
    this.setState({
      cartAmount: this.displayCartAmount()
    });
    this.setState({
      cartTotal: this.displayCartTotal()
    });
    
    setTimeout(this.closePopup, 3000);
  }

  // Closes popup after 3 seconds
  closePopup() {
    this.setState({
      showCartPopup: false
    })
  }

  // If showCart is true, set it to false - if false, set to true
  toggleCart() {
    if (this.state.showCart === true) {
      this.setState({
        showCart: false
      })
    } else {
      this.setState({
        showCart: true
      })
    }
  }

  // Creates a string displaying how many Rolls are in the cart array
  displayCartAmount() {
    if (this.state.cart.length === 0 || this.state.cart.length > 1) {
      return this.state.cart.length + " items";
    } else {
      return this.state.cart.length + " item";
    }
  }

   // Creates a string displaying how much Rolls are in the cart array cost
  displayCartTotal() {
    let totalPrice = this.state.cart.reduce((sum, roll) => {
      return sum + roll.price;
    }, 0);
    return "Total: " + this.priceFormatter(totalPrice);
  }

  render() { 
    // Loops through the rollData list, passes props to Roll Components
    const gridItems = [];

    Object.keys(rollData).forEach((key) => {
      gridItems.push(
        <RollCard
          key={key}
          rollKey={key}
          rollDatum={rollData[key]}
          priceFormatter={this.priceFormatter}
          createRoll={this.createRoll}
          addToCart={this.addToCart}
        />
      );
    });

    return (
      <div className="homepage">
        <header>
          <img id="logo" src={logo} alt="Bun Bun Bake Shop logo with text" width="400" />
          <div id="header-text">
            <NavBar 
              currentRoll={this.state.currentRoll}
              priceFormatter={this.priceFormatter}
              showCartPopup={this.state.showCartPopup}
              toggleCart={this.toggleCart}
            />
            <hr/>
            <h1>Our hand-made cinnamon rolls</h1>
          </div>
        </header>
        { this.state.showCart &&
          <Cart
            cart={this.state.cart}
            cartAmountDisplay={this.displayCartAmount()}
            cartTotalDisplay={this.displayCartTotal()}
          />
        }
        <div id="product-grid">
          {gridItems}
        </div>
      </div>
    );
  }
}
 
export default Homepage;