let obj = {
    name: "Tanjim",
    age: 23,
    email: "test@test.com",
};

/**
 * HOW TO USE:
 * The '...' (spread operator) "unpacks" the properties of 'obj' 
 * and places them inside the new curly braces '{}'.
 */
let obj2 = { ...obj };

// obj2 is now a separate copy of obj
console.log(obj2);