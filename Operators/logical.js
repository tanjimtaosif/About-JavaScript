// && → true only if both operands are true
// || → true if at least one operand is true
// ! → reverses the truth value

let a = true;
let b = false;

// AND (&&)
console.log("a && b:", a && b); // false, because both are not true

// OR (||)
console.log("a || b:", a || b); // true, because at least one is true

// NOT (!)
console.log("!a:", !a); // false, because a is true
console.log("!b:", !b); // true, because b is false

// Practical example
let age = 20;
let hasPermission = true;

if (age >= 18 && hasPermission) {
    console.log("Access granted"); // both conditions must be true
} else {
    console.log("Access denied");
}

if (age < 18 || !hasPermission) {
    console.log("Access denied"); // either condition true triggers denial
}
