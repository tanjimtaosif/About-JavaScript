let obj = {
    name: "Tanjim",
    age: 23,
    email: "test@test.com",
};

/**
 * HOW TO USE: Object.assign(target, source)
 * It copies properties from the 'source' to the 'target'.
 */

// 1. Creating a clone: target is an empty object {}
let obj2 = Object.assign({}, obj);

// 2. Merging + Cloning: target starts with { id: 1 }, then obj is added
let obj3 = Object.assign({ id: 1 }, obj);

console.log(obj2); // { name: "Tanjim", age: 23, email: "test@test.com" }
console.log(obj3); // { id: 1, name: "Tanjim", age: 23, email: "test@test.com" }
