let timeoutID = setTimeout(function() {
  console.log("BOOM! 💥 (This won't run because we clear it)");
}, 5000);

console.log("Timer started for 5 seconds...");

// 2. Some logic happens (e.g., a user clicks a 'Cancel' button)
// For this example, we'll cancel it after 2 seconds
setTimeout(function() {
  console.log("Wait! Defusing the bomb...");
  
  // 3. Use clearTimeout with the ID to stop the execution
  clearTimeout(timeoutID);
  
  console.log("Timer cleared successfully.");
}, 2000);