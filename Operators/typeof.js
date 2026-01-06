// 1. Strings (Text)
console.log(typeof "Mahtab");  // "string"

// 2. Numbers
console.log(typeof 100);       // "number"
console.log(typeof 3.14);      // "number"

// 3. Booleans (True/False)
console.log(typeof true);      // "boolean"

// 4. Undefined (A variable with no value yet)
let name;
console.log(typeof name);      // "undefined"

// 5. Objects (Complex data)
console.log(typeof {age: 25}); // "object"
console.log(typeof [1, 2, 3]); // "object" (Arrays are a type of object in JS)

/**
 * JAVASCRIPT TYPE QUIRKS
 */

console.log(typeof null);      // "object"   <- The most famous mistake
console.log(typeof NaN);       // "number"   <- The most ironic
console.log(typeof [1, 2, 3]); // "object"   <- Arrays are just objects
console.log(typeof function(){}); // "function" <- Objects that get a special name