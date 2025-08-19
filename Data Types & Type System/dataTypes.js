// ------------------
// PRIMITIVE DATA TYPES
// ------------------

// 1. String
let name = "Tanjim";
let greeting = 'Hello';
let message = `Welcome, ${name}`;
console.log(name, greeting, message); // Tanjim Hello Welcome, Tanjim

// 2. Number
let age = 25;
let price = 199.99;
console.log(age, price); // 25 199.99

// 3. Boolean
let isLoggedIn = true;
let hasPaid = false;
console.log(isLoggedIn, hasPaid); // true false

// 4. Undefined
let score;
console.log(score); // undefined

// 5. Null
let selectedColor = null;
console.log(selectedColor); // null

// 6. Symbol -> Creates Unique immutable value
let sym1 = Symbol('id');
let sym2 = Symbol('id');
console.log(sym1 === sym2); // false (symbols are always unique)

// Create an object with some properties
let obj = {
    uid: 1,
    name: 'Tanjim',
    age: 23,
    email: 'tanjim@gmail.com',
};

// Create a Symbol with the description 'uid'
let u1 = Symbol('uid');
// Add a new property to the object, but using the Symbol as the key
obj[u1] = '1';

// 7. BigInt (for large integers)
let bigNumber = 1234567890123456789012345678901234567890n;
console.log(bigNumber); // 1234567890123456789012345678901234567890n

// ------------------
// REFERENCE DATA TYPES
// ------------------

// 1. Object
let person = {
    name: "Tanjim",
    age: 23
};
console.log(person); // { name: "Tanjim", age: 23 }

// 2. Array
let numbers = [10, 20, 30];
console.log(numbers); // [10, 20, 30]

// 3. Function
function greet() {
    console.log("Hello from function!");
}
greet(); // Hello from function!
