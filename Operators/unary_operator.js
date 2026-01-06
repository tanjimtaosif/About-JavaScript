// +  tries to convert to number
// -  negates
// ++  increment
// --  decrement
// typeof  returns data type

/**
 * UNARY OPERATORS (Work on one value)
 */

// 1. Unary Plus (+) -> Tries to turn a string into a number
let x = "5";
console.log(+x);      // 5 (Now it's a Number, not a String)

// 2. Unary Minus (-) -> Makes a number negative
let y = 10;
console.log(-y);      // -10

// Increment and Decrement
// POST-INCREMENT (The '++' comes AFTER)

let countPost = 1;
console.log(countPost++); // Output: 1 
// (It prints the current 1, THEN adds 1 behind the scenes)
console.log(countPost);   // Output: 2

//PRE-INCREMENT (The '++' comes BEFORE)
 
let countPre = 1;
console.log(++countPre);  // Output: 2 
// (It adds 1 FIRST, then prints the result)


// POST-DECREMENT
 
let livesPost = 3;
console.log(livesPost--); // Output: 3
console.log(livesPost);   // Output: 2

//PRE-DECREMENT

let livesPre = 3;
console.log(--livesPre);  // Output: 2

// 5. typeof -> Tells you the data type
console.log(typeof "Hello"); // "string"
console.log(typeof 42);      // "number"