// Unary operators will only apply on single value
// +, -, typeof, ++, --

let x = 5;

// + (Unary plus)
console.log(+x); // 5, just converts to number (if it's not already)
console.log(+"10"); // 10, string to number

// - (Unary minus)
console.log(-x); // -5, negates the value

// typeof
console.log(typeof x); // "number"
console.log(typeof "Hello"); // "string"

// ++ (Increment)
let y = 10;
console.log(++y); // 11, increments first then returns
console.log(y++); // 11, returns first then increments (y becomes 12 after this)

// -- (Decrement)
let z = 8;
console.log(--z); // 7, decrements first then returns
console.log(z--); // 7, returns first then decrements (z becomes 6 after this)
