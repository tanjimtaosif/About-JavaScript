// instance of works with reference values 
// [], {}, func(){}

// Simple object check
// In JavaScript, almost everything that is not a primitive (like number, string, boolean, null, undefined, symbol, bigint) is an object.
// Arrays are a special type of object.
// That’s why arr instanceof Object is true.
let arr = [1, 2, 3];
console.log(arr instanceof Array);   // true
console.log(arr instanceof Object);  // true

// Using a class
class Person {}
let john = new Person();
console.log(john instanceof Person); // true
console.log(john instanceof Object); // true

// Not an instance
let obj = {};
console.log(obj instanceof Person);  // false
