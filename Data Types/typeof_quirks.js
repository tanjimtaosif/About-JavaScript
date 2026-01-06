/**
 * JAVASCRIPT TYPES AND QUIRKS
 * Testing the unique behaviors of JS types and operators.
 */

console.log("--- Types ---");
console.log("typeof 12:", typeof 12);               // "number"
console.log("typeof 'Mahtab':", typeof 'Mahtab');   // "string"
console.log("typeof null:", typeof null);           // "object" (This is a famous JS bug!)
console.log("typeof NaN:", typeof NaN);             // "number" (Not a Number is... a number type)

console.log("\n--- Logic & Math ---");
console.log("NaN === NaN:", NaN === NaN);           // false (NaN is never equal to anything, even itself)
console.log("0.1 + 0.4:", 0.1 + 0.4);               // 0.5 (Simple decimals work...)
console.log("0.1 + 0.2:", 0.1 + 0.2);               // 0.30000000000000004 (The Floating Point quirk)

console.log("\n--- Type Coercion (Adding things) ---");
console.log("[] + []:", [] + []);                   // "" (Two empty arrays converted to strings result in an empty string)
console.log("'' + '':", '' + "");                   // "" (Empty strings combined)
console.log("1 + '1':", 1 + "1");                   // "11" (Number 1 is turned into a string and joined)

console.log("\n--- Comparison ---");
console.log("1 == '1':", 1 == "1");                 // true (Abstract equality: converts types to match)
console.log("1 === '1':", 1 === "1");               // false (Strict equality: checks value AND type)