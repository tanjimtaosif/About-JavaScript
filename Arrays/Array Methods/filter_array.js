// filter creates a NEW array by checking every value against a "True/False" test.
// If the function returns true, the value stays. If false, it is kicked out.

let arr = [1, 2, 3, 4, 5, 6, 7, 8];

let newArr = arr.filter(function (val) {
    if (val > 4) return true;
});

console.log(newArr); // [5, 6, 7, 8]


