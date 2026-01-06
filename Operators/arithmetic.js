/**
 * ARITHMETIC OPERATORS + CONCATENATION
 */

// 1. Addition (+) -> When both are numbers
let apples = 10;
let oranges = 5;
console.log("Addition:", apples + oranges); // 15

// 2. Concatenation (+) -> When at least one is a string
let firstName = "Mahtab";
let lastName = "Hossain";
console.log("Full Name:", firstName + " " + lastName); // "Mahtab Hossain"

// 3. The Coercion Trap
// If you mix a number and a string, Concatenation wins!
console.log("Result:", "10" + 5); // "105" (String)


// 4. Subtraction (-)
console.log("Subtraction:", x - y);     // 7

// 5. Multiplication (*)
console.log("Multiplication:", x * y);  // 30

// 6. Division (/)
console.log("Division:", x / y);        // 3.3333...

// 7. Modulo / Remainder (%)
// This gives you what is LEFT OVER after division.
// 10 divided by 3 is 3, with 1 left over.
console.log("Remainder:", x % y);       // 1

// 8. Exponentiation (**)
// This is "power of". 10 to the power of 3 (10 * 10 * 10).
console.log("Power:", x ** y);          // 1000