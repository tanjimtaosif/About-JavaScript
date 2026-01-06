let count = 5;

if (count-- == 5) { // It checks: is 5 == 5? Yes!
    console.log("Matched");
} else {
    console.log("Not matched");
}

console.log("Final count value is:", count); // This will be 4