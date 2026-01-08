let object = {
    name: 'Tanjim',
    age: 26,
    Food: 'Rice'
};

// 1. Using a variable to access a property (Bracket Notation)
// This is the most powerful way because 'accessName' could change dynamically.
let accessName = "name";
console.log(object[accessName]); // Output: Tanjim

// 2. Direct access using Dot Notation
// This is the most common way to write code when you already know the property name.
console.log(object.Food); // Output: Rice

// 3. Direct access using Bracket Notation (with a string)
// Useful if your property name has spaces or special characters (e.g., object["User Name"]).
console.log(object['age']); // Output: 26