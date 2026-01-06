/**
 * 1. GLOBAL SCOPE
 * Variables declared outside any function or block.
 * Accessible from anywhere in the script.
 */
const globalVar = "I am everywhere";

/**
 * 2. VAR (Function Scope)
 * var ignores block scope (if/for blocks) but respects function scope.
 */
{
    var leaked = "I escaped the block!"; 
}
console.log(leaked); // Works: "I escaped the block!"

function varInFunction() {
    if (true) {
        var functionScoped = "I am trapped in this function";
    }
    console.log(functionScoped); // Works: var ignores the 'if' block
}
// console.log(functionScoped); // Error: var is trapped by the function boundary

/**
 * 3. LET (Block Scope)
 * let is strictly confined to the nearest curly braces {}.
 */
function letExample() {
    if (true) {
        let blockScoped = "I am trapped in this IF statement";
        console.log(blockScoped); // Works
    }
    // console.log(blockScoped); // Error: blockScoped is not defined here
}

/**
 * 4. CONST (Block Scope + Immutability)
 * Like let, but the assignment cannot be changed.
 */
const PI = 3.14;
// PI = 3.15; // Error: Assignment to constant variable.

const user = { name: "Alice" };
user.name = "Bob"; // Works: You can change properties of an object
// user = { name: "Charlie" }; // Error: You cannot reassign the variable itself