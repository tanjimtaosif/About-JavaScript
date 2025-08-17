// Hoisting behavior & Temporal Dead Zone (TDZ)

/* ----------------------------
   var is hoisted and initialized as 'undefined'
----------------------------- */
console.log(testVar); // Output: undefined
var testVar = "I’m hoisted";

/* ----------------------------
   let is hoisted but not initialized
   Accessing it before declaration throws ReferenceError
----------------------------- */
// console.log(testLet); *Uncaught ReferenceError: Cannot access 'testLet' before initialization
let testLet = "TDZ applies to let";
console.log(testLet); //  Output: TDZ applies to let

/* ----------------------------
   const behaves like let in hoisting and TDZ
   Must be initialized at declaration
----------------------------- */
// console.log(testConst); *Uncaught ReferenceError: Cannot access 'testConst' before initialization
const testConst = "TDZ applies to const";
console.log(testConst); //  Output: TDZ applies to const

/* ----------------------------
   Summary:
   - var is hoisted and initialized as undefined
   - let & const are hoisted but NOT initialized (TDZ)
   - TDZ = the period from the start of scope to declaration
----------------------------- */
