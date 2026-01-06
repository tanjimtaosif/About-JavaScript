/**
 * 1. REDECLARATION
 * Unlike let/const, 'var' allows you to declare the same variable 
 * name multiple times in the same scope without throwing an error.
 */
var a = 12; 
var a = 40; 
console.log(a); // Output: 40 (The second declaration overwrites the first)

/**
 * 2. THE WINDOW OBJECT (Global Scope)
 * When 'var' is used in the global scope (outside a function), 
 * it attaches itself as a property of the 'window' object in browsers.
 */
var userCount = 5;
console.log(window.userCount); // Output: 5
// Note: 'let' and 'const' do NOT attach to the window object.

/**
 * 3. FUNCTION SCOPE
 * 'var' is limited by function boundaries, not block boundaries (like if/for).
 */
function scopeTest() {
    var insideFunc = "I am hidden from the outside";
    if (true) {
        var insideIf = "I am NOT hidden from the function";
    }
    console.log(insideIf); // Works: because var ignores the 'if' block
}
// console.log(insideFunc); // Error: var respects the function boundary

/**
 * 4. HOISTING
 * 'var' variables are processed before any code is executed.
 * They are "hoisted" to the top of their scope and initialized as 'undefined'.
 */
console.log(greeting); // Output: undefined (No error, just uninitialized)
var greeting = "Hello!";