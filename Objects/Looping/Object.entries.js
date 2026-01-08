let obj = {
    name: "Tanjim",
    age: 23,
    email: "test@test.com",
};

/**
 * HOW TO USE:
 * Object.entries(obj) takes an object and returns an array.
 * Output: [ ["name", "Tanjim"], ["age", 23], ["email", "test@test.com"] ]
 */
const entries = Object.entries(obj);

console.log(entries);