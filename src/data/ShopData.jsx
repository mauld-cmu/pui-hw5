//Contains all the data needed to populate Roll grid
export const rollData = {
  "original": {
    id: "original",
    displayName: "Original cinnamon roll",
    imageURL: "/assets/original-cinnamon-roll.jpg",
    imageAlt: "Photo of original flavor cinnamon roll",
    basePrice: 2.49,
  },
  "apple": {
    id: "apple",
    displayName: "Apple cinnamon roll",
    imageURL: "/assets/apple-cinnamon-roll.jpg",
    imageAlt: "Photo of apple flavored cinnamon roll",
    basePrice: 3.49,
  },
  "raisin": {
    id: "raisin",
    displayName: "Raisin cinnamon roll",
    imageURL: "/assets/raisin-cinnamon-roll.jpg",
    imageAlt: "Photo of raisin flavored cinnamon roll",
    basePrice: 2.99,
  },
  "walnut": {
    id: "walnut",
    displayName: "Walnut cinnamon roll",
    imageURL: "/assets/walnut-cinnamon-roll.jpg",
    imageAlt: "Photo of walnut flavored cinnamon roll",
    basePrice: 3.49,
  },
  "chocolate": {
    id: "chocolate",
    displayName: "Double-chocolate cinnamon roll",
    imageURL: "/assets/double-chocolate-cinnamon-roll.jpg",
    imageAlt: "Photo of double chocolate flavored cinnamon roll",
    basePrice: 3.99,
  },
  "strawberry": {
    id: "strawberry",
    displayName: "Strawberry cinnamon roll",
    imageURL: "/assets/strawberry-cinnamon-roll.jpg",
    imageAlt: "Photo of Strawberry flavored cinnamon roll",
    basePrice: 3.99,
  }
}

export const glazingData = {
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

export const packData = {
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