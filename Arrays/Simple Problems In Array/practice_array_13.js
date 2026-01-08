// Q13: Use .some() to check if any student has scored below 35:
//     let arr = [45, 60, 28, 90];

let arr = [45, 60, 28, 90];
let below = arr.some((val) => {
    return val < 35;
});

console.log(below);
