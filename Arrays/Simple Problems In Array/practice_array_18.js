// Q18: Clone this array properly (not by reference) :
//     let arr = [1, 2, 3];

let arr = [1, 2, 3];
let [...newArr] = arr;

newArr.pop()
console.log(arr);
console.log(newArr);
