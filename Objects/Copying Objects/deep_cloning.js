let obj = {
    name: "Tanjim",
    age: 23,
    email: "test@test.com",
    address: {
        city: 'Dhaka',
        Village: 'Bashundhara'
    }
};

let object = {
    name: "Tanjim",
    age: 23,
    email: "test@test.com",
    address: {
        city: 'Dhaka',
        Village: 'Bashundhara'
    }
};

/**
 * 1. SHALLOW COPY SECTION
 * Use: Fast, but risky with nested objects.
 * Why: It copies the "address" of the nested object, not the actual values.
 */
let obj2 = { ...obj };

// Changing the copy affects the original because they share the same 'address' reference.
obj2.address.city = "Narayanganj";

console.log(obj);   // Result: city is "Narayanganj" (Original was modified!)
console.log(obj2);  // Result: city is "Narayanganj"

/**
 * 2. DEEP CLONE SECTION
 * Use: Safe for complex objects.
 * Why: It breaks all links to the original memory, creating a 100% independent copy.
 */
// Step 1: Convert object to string, then back to a brand new object.
let deepClone = JSON.parse(JSON.stringify(object));

// Step 2: Modify ONLY the deepClone.
deepClone.address.city = "Dinajpur";

// The original 'object' remains 'Dhaka' because deepClone is a totally different entity in memory.
console.log(object);    // Result: city is still "Dhaka" (Safe!)
console.log(deepClone); // Result: city is "Dinajpur" (Independent!)