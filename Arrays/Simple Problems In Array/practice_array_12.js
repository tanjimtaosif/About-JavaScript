// Q12: Use .find() to get the first number less than 10:
//     let arr = [12, 15, 3, 8, 20];

let arr = [12, 15, 3, 8, 20];
let less = arr.find(function (val) {
    return val < 10;
});

console.log(less);
