let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Creating a "shallow copy" of the array.
// The spread operator (...) unpacks 'arr' and puts the values into a brand new array.
let newArr = [...arr];

// This only removes the last item from the NEW array.
newArr.pop();

// The original 'arr' remains unchanged because they are now two separate lists in memory.
console.log(arr);    // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(newArr); // [1, 2, 3, 4, 5, 6, 7, 8]