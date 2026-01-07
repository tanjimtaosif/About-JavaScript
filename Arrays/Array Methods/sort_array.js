let arr = [11, 2, 34, 12, 1, 45];

// The sort() method takes a "compare function" to handle numbers correctly.
let sr = arr.sort(function (a, b) {
    // If (a - b) it is ascending order (smallest to largest).
    // If (b - a) it is descending order (smallest to largest).
    return a - b;
});

console.log(sr); // [1, 2, 11, 12, 34, 45]