let arr = [1, 3, 4, 5, 6];
// Will use map() when we need make a new array using the old list of array.
// map visits every item, does something to it, and puts the result into a NEW array.
// Think of it as: "Take the old list and create a new version of it."
let newArr = arr.map(function (value) {
    return value * 2; // Every number in the new array will be doubled
});

console.log(arr);    // [1, 3, 4, 5, 6] (Original stays the same)
console.log(newArr); // [2, 6, 8, 10, 12] (The new transformed list)