// typeof works mostly with primitive
// null, [], NaN

// 1. String
console.log(typeof "Hello");     // "string"

// 2. Number
console.log(typeof 42);          // "number"
// (quirk)
console.log(0.1 + 0.2); // 0.30000000000000004 
console.log(typeof (0.1 + 0.2)); // "number"


// 3. BigInt
console.log(typeof 42n);         // "bigint"

// 4. Boolean
console.log(typeof true);        // "boolean"

// 5. Undefined
let x;
console.log(typeof x);           // "undefined"

// 6. Null (quirk)
console.log(typeof null);        // "object"  (historical JS bug)

// 7. Symbol
console.log(typeof Symbol("id")); // "symbol"


// 8. Object
console.log(typeof {a:1, b:2});   // "object"

// 9. Array (quirk)
console.log(typeof [1,2,3]);      // "object" (use Array.isArray to check)

// 10. Function (special case)
console.log(typeof function(){}); // "function" 

// NaN (quirk)
console.log(typeof NaN);   // "number" 
