// Q14: Rewrite this safely using optional chaining:
//     const person = {};
//     console. log(person. profile. name); X
const person = {};
let newPerson = person?.profile?.name;
console.log(newPerson);
