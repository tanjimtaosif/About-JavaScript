// Reduce is when we try to make an array to a single value.

let arr = [1, 2, 3, 4, 5];
let newArr = arr.reduce(function (accumulator, value) {
    return accumulator + value;
}, 0);

console.log(newArr);
