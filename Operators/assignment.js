// = → assigns a value.
// += → adds and assigns.
// -= → subtracts and assigns.
// *= → multiplies and assigns.
// /= → divides and assigns.
// %= → modulus (remainder) and assigns.

let a = 10;

// Simple Assignment (=)
let b = 5;
console.log("b =", b); // 5

// Addition Assignment (+=)
a += 5; // same as: a = a + 5
console.log("a after += 5 ->", a); // after reassigning the value is 15

// Subtraction Assignment (-=)
a -= 3; // same as: a = a - 3
console.log("a after -= 3 ->", a); // after reassigning the value is 12

// Multiplication Assignment (*=)
a *= 2; // same as: a = a * 2
console.log("a after *= 2 ->", a); // after reassigning the value is 24

// Division Assignment (/=)
a /= 4; // same as: a = a / 4
console.log("a after /= 4 ->", a); // after reassigning the value is 6

// Modulus Assignment (%=)
a %= 5; // same as: a = a % 5
console.log("a after %= 5 ->", a); // after reassigning the value is 1
