//  Closures
function createCounter() {
  // This variable is "private" - it stays inside this specific counter
  let count = 0;

  return function () {
    count++;
    console.log(`Current count: ${count}`);
  };
}

// Creating our first independent counter
const playerOneScore = createCounter();
playerOneScore(); // Current count: 1
playerOneScore(); // Current count: 2

// Creating a second independent counter
const playerTwoScore = createCounter();
playerTwoScore(); // Current count: 1 (Starts fresh!)
playerTwoScore(); // Current count: 2
playerTwoScore(); // Current count: 3

/**
 * WHAT IS A CLOSURE?
 * It is when a function "remembers" the variables around it,
 * even after the outer function has finished running.
 * * WHY USE IT?
 * To give functions a "memory" without using global variables
 * that other parts of your code might accidentally change.
 * * WHEN TO USE IT?
 * Use it when you need multiple independent instances of something
 * (like scores for different players or timers for different buttons).
 */
