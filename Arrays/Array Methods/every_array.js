let arr = [10, 20, 30, 40, 50];

// .every() acts like a strict manager: 
// It requires EVERY single item to pass the test.
let eve = arr.every(function (val) {
    return val > 8; // Test: Is 10 > 8? Yes. Is 20 > 8? Yes...
});

console.log(eve); // Result: true