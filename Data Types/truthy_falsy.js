// Truthy vs falsy values

// 0, false, "", null, undefined, NaN, document.all -> These wil give us falsy value
/**
 * CHECKING THE "FALSY" LIST
 * All of these result in 'false'
 */

console.log("--- THE FALSY LIST ---");

console.log(!!false);          // false
console.log(!!0);              // false (The number zero)
console.log(!!-0);             // false (Negative zero)
console.log(!!0n);             // false (BigInt zero)
console.log(!!"");             // false (Empty string)
console.log(!!null);           // false (Nothingness)
console.log(!!undefined);      // false (Not defined)
console.log(!!NaN);            // false (Not a Number)

// Special Browser Case
// console.log(!!document.all); // false (Only in browsers for legacy support)

// Rest are truthy
