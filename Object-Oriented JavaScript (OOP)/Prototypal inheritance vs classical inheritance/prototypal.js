let coffee = {
  color: "dark",
  drink: function () {
    console.log("drink drink drink");
  },
};

let arabiataCoffee = Object.create(coffee);
arabiataCoffee.taste = "bitter";
arabiataCoffee.drink();
