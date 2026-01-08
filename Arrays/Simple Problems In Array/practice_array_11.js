// Q11: Use . reduce() to find the sum of this array:
//     let arr = [10, 20, 30];

let arr = [10, 20, 30];
let sumOf = arr.reduce((accumulator, value) => {
    return accumulator + value;
}, 0);

console.log(sumOf);
