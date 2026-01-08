// The Rest Parameter (...) gathers all individual arguments into a single Array.
// It is used when you don't know exactly how many values will be passed to the function.
function abc(...val) {
    // 'val' is now a real array that you can use with methods like .map() or .sort()
    console.log(val);
}

// You can pass 2 arguments or 200; the rest parameter handles them all.
abc(1, 23, 43, 54, 4345, 52);
// Output: [1, 23, 43, 54, 4345, 52]