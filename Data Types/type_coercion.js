// Type coercion in a concept where the data type converts data type automatically
// "5" + 1 = '51' - Here our '+' sign do the concatination. Because in programming '+' do two things Addition and Concatination that why when the program find a string in the operation it converts the other operand to string and concate them both
// "5" - 1 = 4 - Here our '-' oparator do the subtraction that's why it gives us 4

/**
 * TYPE COERCION EXAMPLES
 */

// 1. Addition vs. Concatenation
console.log("5" + 1);    // "51" (String wins: Number 1 becomes "1")
console.log(10 + "20");  // "1020" (String wins)

// 2. Math Operators ( - , * , / )
console.log("5" - 1);    // 4 (Math wins: String "5" becomes Number 5)
console.log("10" * "2"); // 20 (Both strings converted to numbers)
console.log("30" / 3);   // 10 (String "30" converted to number)

// 3. Booleans (True = 1, False = 0)
console.log(true + 1);   // 2 (true becomes 1)
console.log(false + 1);  // 1 (false becomes 0)
console.log("5" - true); // 4 ("5" becomes 5, true becomes 1)

// 4. The "Equality" Coercion (Loose Equality)
console.log(1 == "1");   // true (JS converts them to the same type to compare)
console.log(1 === "1");  // false (Strict equality: no coercion allowed!)