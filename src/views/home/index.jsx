import React, { Component } from 'react';
import './Homepage.css';
import logo from './logo-01.svg';
import NavBar from '../../components/NavBar';
import Cart from '../../components/Cart';
import RollCard from '../../components/RollCard';

//Contains all the data needed to populate Roll grid
const rollData = {
  "original": {
    displayName: "Original cinnamon roll",
    imageURL: "/assets/original-cinnamon-roll.jpg",
    imageAlt: "Photo of original flavor cinnamon roll",
    basePrice: 2.49,
  },
  "apple": {
    displayName: "Apple cinnamon roll",
    imageURL: "/assets/apple-cinnamon-roll.jpg",
    imageAlt: "Photo of apple flavored cinnamon roll",
    basePrice: 3.49,
  },
  "raisin": {
    displayName: "Raisin cinnamon roll",
    imageURL: "/assets/raisin-cinnamon-roll.jpg",
    imageAlt: "Photo of raisin flavored cinnamon roll",
    basePrice: 2.99,
  },
  "walnut": {
    displayName: "Walnut cinnamon roll",
    imageURL: "/assets/walnut-cinnamon-roll.jpg",
    imageAlt: "Photo of walnut flavored cinnamon roll",
    basePrice: 3.49,
  }, 
  "chocolate": {
    displayName: "Double-chocolate cinnamon roll",
    imageURL: "/assets/double-chocolate-cinnamon-roll.jpg",
    imageAlt: "Photo of double chocolate flavored cinnamon roll",
    basePrice: 3.99,
  },
  "strawberry": {
    name: "strawberry",
    displayName: "Strawberry cinnamon roll",
    imageURL: "/assets/strawberry-cinnamon-roll.jpg",
    imageAlt: "Photo of Strawberry flavored cinnamon roll",
    basePrice: 3.99,
  }
}

const glazingData = {
  "keepOriginal": {
    price: 0.00,
    displayName: "Keep original"
  },
  "sugarMilk": {
    price: 0.00,
    displayName: "Sugar milk"
  },
  "vanillaMilk": {
    price: 0.50,
    displayName: "Vanilla milk"
  },
  "doubleChocolate": {
    price: 1.50,
    displayName: "Double chocolate"
  }
}

const packData = {
  "onePack": {
    priceMultiplier: 1,
    displayNumber: 1
  },
  "threePack": {
    priceMultiplier: 3,
    displayNumber: 3
  },
  "sixPack": {
    priceMultiplier: 5,
    displayNumber: 6
  },
  "twelvePack": {
    priceMultiplier: 10,
    displayNumber: 12
  }
}

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
    super(props);
    this.state = {
      currentRoll: new RollObj('original', 'keepOriginal', 'onePack'),
      cart: [],
      cartAmount: "0 items",
      cartTotal: "Total: $0.00",
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
              cartAmount={this.state.cartAmount}
              cartTotal={this.state.cartTotal}
              currentRoll={this.state.currentRoll}
              priceFormatter={this.priceFormatter}
              showCartPopup={this.state.showCartPopup}
            />
            <hr/>
            <h1>Our hand-made cinnamon rolls</h1>
          </div>
        </header>
        <Cart/>
        <div id="product-grid">
          {gridItems}
        </div>
      </div>
    );
  }
}
 
export default Homepage;