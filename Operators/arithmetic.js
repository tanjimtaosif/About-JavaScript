// Arithmetic operations in JavaScript
// +, -, /, *, %, **

let a = 10;
let b = 3;

// Addition
console.log("a + b =", a + b); // 13

// Subtraction
console.log("a - b =", a - b); // 7

// Multiplication
console.log("a * b =", a * b); // 30

// Division
console.log("a / b =", a / b); // 3.333...

// Modulus (remainder)
console.log("a % b =", a % b); // 1

// Exponentiation (a to the power of b)
console.log("a ** b =", a ** b); // 1000

// --------------------------------------
// String concatenation using +
// --------------------------------------
let firstName = "Tanjim";
let lastName = "Mahtab";

console.log("Full Name =", firstName + " " + lastName);
// "Tanjim Ahmed"

// Mixing numbers and strings
console.log("10 + '3' =", 10 + "3"); // "103" (string concatenation, not math!)
console.log("'10' - 3 =", "10" - 3); // 7 (string auto-converted to number)
