/**
 * ENCAPSULATION: Bundling the data (clickCount) and the logic (the function) 
 * together inside a "shell" so the data is protected from the outside world.
 */
function createClickLimiter(maxLimit) {
  // 1. WHAT: Private data. No one outside this function can change clickCount.
  let clickCount = 0; 

  return function () {
    // 2. WHY: To enforce rules. We control EXACTLY how the count increases.
    if (clickCount < maxLimit) {
      clickCount++;
      console.log(`Clicked: ${clickCount} times`);
    } else {
      console.error("LIMIT EXCEEDED");
    }
  };  
}

// 3. WHEN: Use this when you want to protect a variable from being 
// accidentally changed or "messed with" by other parts of your program.
const tryClick = createClickLimiter(5);

tryClick();
tryClick(); 