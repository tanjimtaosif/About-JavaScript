// Q10: Use .filter() to keep numbers greater than 10:
//     let arr = [5, 12, 8, 20, 3];

let arr = [5, 12, 8, 20, 3];
let greaterNum = arr.filter((val) => {
    return val > 10;
});

console.log(greaterNum);

