// This is a special keyword, the value of this keyword changes it's value based on where we used.

// global scope

console.log(this);
//  Here value of this is window

// Inside function

function abcd() {
  console.log(this);
  //    Here value of this is window
}

abcd();

// this in method
// A function that is inside a object which we call method

let obj = {
  name: "Tanjim",
  age: 26,
  sayName: function () {
    console.log(this.age);
    // Here this can access the value of this object
    // this denote the full object
    // but if we use arrow function here "this" will loose the value of the object and will show window
  },
};

obj.sayName();

// "this" in event handler
let h1 = document.querySelector("h1");

h1.addEventListener("click", function () { 
  console.log((this.style.color = "red"));
});

// class - First alphabet have to be capital
class Abcd {
  constructor() {
    console.log("heyhe");
    this.a = 12;
  }
}
// new creates a blank object
let val = new Abcd();
