//  this call apply bind

// when we call a function, we can set the value of this what it will be

let callObj = {
  name: "Tanjim",
};

function abcd() {
  console.log(this);
}

abcd.call(obj); // when we pass the obj using call then it will have the object

// when we use apply we can only send 2 parameters to our function, object and the rest value inside an array

let applyObj = {
  name: "harsh",
  age: 26,
};

function abcd(a, b, c) {
  console.log(this, a, b, c);
}
abcd.apply(obj, [1, 2, 3]);

// when we use bind its creates a new copy of the function and puts on it's variables then the variable became the function 
let obj = {
  name: "harsh",
  age: 26,
};

function abcd(a, b, c) {
  console.log(this, a, b, c);
}

let fnc = abcd.bind(obj, 1, 2, 3);
fnc();
