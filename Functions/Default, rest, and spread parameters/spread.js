let original = [10, 20];
let copy = [...original];

copy.push(30);

console.log(original); // [10, 20] (Remains original)
console.log(copy);     // [10, 20, 30] (Only the copy changed)