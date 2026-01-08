let arr = [1, 2, 3, 4, 5];

// Destructuring assignment
// a gets index 0
// b gets index 1
// The empty comma , skips index 2
// c gets index 3
let [a, b, , c] = arr;

console.log(a); // Output: 1
console.log(b); // Output: 2
console.log(c); // Output: 4 (because 3 was skipped)
