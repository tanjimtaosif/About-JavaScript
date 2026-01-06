// console.log(x); // ERROR: ReferenceError: Cannot access 'x' before initialization
let x = 23;

/**
 * What the Browser actually sees:
 * (let x is hoisted, but is "uninitialized")
 * console.log(x); <-- CRASH! "I know 'x' exists, but you aren't allowed to touch it yet."
 * x = 23;         <-- This is where the 'x' becomes safe to use.
 */