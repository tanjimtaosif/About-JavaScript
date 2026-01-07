let arr = [1, 32, 3, 4, 3];
// splice(index, count) modifies the original array.
// (2, 1) means: Start at index 2 and remove exactly 1 element.
arr.splice(2, 1);
console.log(arr); // [1, 32, 4, 3] (The '3' at index 2 is gone)