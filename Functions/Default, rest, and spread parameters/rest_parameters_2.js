// a, b, and c are "Positional Parameters" (they take the first 3 arguments)
// ...d is the "Rest Parameter" (it gathers EVERYTHING ELSE into an array)
function hello(a, b, c, ...d) {
    // a = 1
    // b = 23
    // c = 4
    // d = [2, 24, 5] (the "rest" of the numbers)
    console.log(a, b, c, d);
}

hello(1, 23, 4, 2, 24, 5);
// Output: 1 23 4 [2, 24, 5]