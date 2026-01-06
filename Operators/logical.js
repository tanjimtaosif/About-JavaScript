// && - and  operator 
// || - or operator
// ! - not operator

let isRainy = true;
let hasUmbrella = true;
let isSunny = false;

// 1. AND (&&) - "I only go outside if it's NOT raining AND I have an umbrella"
// Since isRainy is true, let's check both:
console.log(isRainy && hasUmbrella); // true (Both are true)

// 2. OR (||) - "I am happy if it is sunny OR if I have an umbrella"
console.log(isSunny || hasUmbrella); // true (One of them is true)

// 3. NOT (!) - "The opposite of the current weather"
console.log(!isRainy); // false (It was true, now it's false)