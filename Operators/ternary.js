// ?:
// condition ? valueIfTrue : valueIfFalse
12 > 13 ? console.log("True") : console.log("False");


let age = 20;

// Using ternary operator
let canVote = (age >= 18) ? "Yes, can vote" : "No, too young";

console.log(canVote); // "Yes, can vote"

//----------------------- 
let num = 7;
let result = (num % 2 === 0) ? "Even" : "Odd";
console.log(result); // "Odd"


//----------------------- 
let score = 78;

let grade = score >= 90 ? "A" : score >= 75 ? "B" : score >= 60 ? "C" : "Fail";

console.log(grade);

//----------------------- 
let points = 120;
let status = points > 100 ? "Gold" : points > 50 ? "Silver" : 'Bronze';

console.log(status);
