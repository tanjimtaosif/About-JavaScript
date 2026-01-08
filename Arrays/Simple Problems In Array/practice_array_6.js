// Q6: Insert "Red" and "Blue" at index 1 in this array:
//     let colors = ["Green", "Yellow"];

let colors = ["Green", "Yellow"];

// colors.splice(index, howManyToDelete, item1, item2, ...)
// 1: Start at index 1 (the position where "Yellow" is)
// 0: Delete ZERO items (we are just inserting)
// "Red", "Blue": These are the new items to squeeze in
colors.splice(1, 0, "Red", "Blue");

console.log(colors);
// Output: ["Green", "Red", "Blue", "Yellow"]
