/**
 * COMPARISON OPERATORS
 */

// 1. Assignment (=) vs Equality (== / ===)
let x = 12; // '=' is for assigning values

// Loose Equality (Checks value only)
console.log("12 == '12':", 12 == '12');   // true (String '12' is converted to Number 12)

// Strict Equality (Checks value AND type) - RECOMMENDED
console.log("12 === '12':", 12 === '12'); // false (Number vs String)

// 2. Inequality (!= vs !==)
// Loose Inequality
console.log("12 != '12':", 12 != '12');   // false (Because loosely they are the same)

// Strict Inequality - RECOMMENDED
console.log("12 !== '12':", 12 !== '12'); // true (They are strictly different types)

// 3. Relational Operators
console.log("12 > 11:", 12 > 11);         // true
console.log("12 < 11:", 12 < 11);         // false
console.log("12 >= 12:", 12 >= 12);       // true
console.log("10 <= 5:", 10 <= 5);         // false