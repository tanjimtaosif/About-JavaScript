// Q14: Use .every() to check if all numbers are even:
//     let arr = [2, 4, 6, 8, 10];

let arr = [2, 4, 6, 8, 10];

let evenNum = arr.every(function (val) {
    return val % 2 === 0; 
});

console.log(evenNum);

