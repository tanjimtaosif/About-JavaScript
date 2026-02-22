// Execution context
// When Js see functions js make execution context. which divide by two different phases one is memory phase and another is execution phase.

/**
 * DEFINITION:
 * Execution Context is the "environment" where JavaScript code is evaluated and executed.
 * Think of it as a box that contains everything the code needs to run.
 * * MOTIVE:
 * Understanding this helps you avoid bugs related to "Hoisting" and "Scope."
 * It explains why you can call a function before it's written in the file!
 */

function simulateJS() {
  const memList = document.getElementById("mem-list");
  const execList = document.getElementById("exec-list");

  // --- PHASE 1: THE MEMORY PHASE ---
  // IMPORTANT: In this phase, JS skips the values and only reserves space.
  // This is why variables start as 'undefined' - this is called HOISTING.
  memList.innerHTML = `
        <li><b>name:</b> undefined (Reserved)</li>
        <li><b>greet:</b> f() { ... } (Stored in full)</li>
    `;
  execList.innerHTML = "<li>Processing...</li>";

  // --- PHASE 2: THE EXECUTION PHASE ---
  // IMPORTANT: This is where the code actually "runs" top-to-bottom.
  // Values are finally assigned to the names we reserved in Phase 1.
  setTimeout(() => {
    execList.innerHTML = "<li>Line 1: <b>name</b> is now 'Gemini'</li>";
  }, 1500);

  setTimeout(() => {
    execList.innerHTML += "<li>Line 2: <b>greet()</b> is ready to use!</li>";
    alert("Execution Context created successfully!");
  }, 3000);
}
/* PRO-TIP FOR NEWBIES: 
  Global Context is created first. Every time you call a function, 
  a BRAND NEW context is created just for that function!
*/
