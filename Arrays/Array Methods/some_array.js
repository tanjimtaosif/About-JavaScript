let arr = [10, 30, 40, 50, 60];

// .some() checks if AT LEAST ONE element passes the test
let newArr = arr.some(function (val) {
    // This function runs for each item in the array until it returns true
    // If it finds a match, it stops immediately (short-circuits) and returns true
    return val > 50;
});

// Since 60 is greater than 50, the result is true
console.log(newArr); // Output: true