// =, ==, ==, !=, !==, >=, <=, >, <

let a = 10;
let b = "10";
let c = 5;

// Assignment operator (=)
let x = 20; // assigns value
console.log("x =", x); // 20

// Equality (==) → loose equality (type conversion allowed)
console.log("a == b ->", a == b); // true (string "10" is converted to number)

// Strict Equality (===) → no type conversion
console.log("a === b ->", a === b); // false (number !== string)

// Not Equal (!=) → loose inequality
console.log("a != b ->", a != b); // false (10 == "10")

// Strict Not Equal (!==) → strict comparison
console.log("a !== b ->", a !== b); // true (number !== string)

// Greater than (>)
console.log("a > c ->", a > c); // true (10 > 5)

// Less than (<)
console.log("a < c ->", a < c); // false (10 < 5)

// Greater than or equal (>=)
console.log("a >= 10 ->", a >= 10); // true

// Less than or equal (<=)
console.log("c <= 5 ->", c <= 5); // true
