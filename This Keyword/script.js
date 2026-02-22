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
    // but if we use arrow function here this will loose the value of the object
  },
};

obj.sayName();

let h1 = document.querySelector("h1");

h1.addEventListener("click", function () {
  console.log((this.style.color = "red"));
});

// class 
class Abcd {
  constructor() {
    console.log("heyhe");
    this.a = 12;
  }
}
let val = new Abcd();
