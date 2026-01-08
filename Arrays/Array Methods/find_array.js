let arr = [1, 2, 3, 4, 5, 6];

// .find() searches the array and returns the VALUE of the FIRST element 
// that satisfies the condition.
let newValue = arr.find(function (value) {
    return value === 1;
});

// find using an array of objects
let arr2 = [
    { id: 1, key: 1 },
    { id: 2, key: 2 },
    { id: 3, key: 1 },
]

// .find() is perfect for objects. It looks for the first object 
// where the 'key' property equals 1.
let newArr = arr2.find(function (val) {
    return val.key === 1; // It finds the object at index 0 and stops immediately.
});

console.log(newValue); // Output: 1
console.log(newArr);  // Output: { id: 1, key: 1 }