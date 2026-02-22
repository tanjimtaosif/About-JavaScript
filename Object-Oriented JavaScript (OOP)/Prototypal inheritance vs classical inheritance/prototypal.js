// 1. WHY: To define a base 'template' or prototype that other objects can share.
// This saves memory because methods like drink() aren't copied to every new object.
let coffee = {
  color: "dark",
  drink: function () {
    console.log("drink drink drink");
  },
};

// 2. HOW: Object.create() creates a brand new object ('arabiataCoffee')
// and sets its internal [[Prototype]] to the 'coffee' object.
let arabiataCoffee = Object.create(coffee);

// 3. WHEN: Use this when you want to extend an object's functionality
// without modifying the original source or using complex Class syntax.
arabiataCoffee.taste = "bitter";

// 4. THE MAGIC: When you call .drink(), JS looks at arabiataCoffee first.
// It doesn't find it there, so it looks "up the chain" to the coffee object.
arabiataCoffee.drink();
