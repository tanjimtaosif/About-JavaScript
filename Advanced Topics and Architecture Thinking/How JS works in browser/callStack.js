/**
 * CALL STACK & SINGLE THREADING
 * * 1. Single-Threaded: JS has ONE call stack; it executes one command at a time.
 * 2. LIFO (Last In, First Out): The last function called is the first one finished.
 * 3. PUSH: Calling a function creates an Execution Context and pushes it to the top.
 * 4. POP: When a function returns or finishes, it is removed from the stack.
 * 5. Synchronous: The engine won't resume the previous function until the top one pops.
 */

function a() {
  console.log("a"); // Stack: [a -> b -> c -> Global]
}

function b() {
  a(); // Stack: [b -> c -> Global]
  console.log("b");
}

function c() {
  b(); // Stack: [c -> Global]
  console.log("c");
}

c(); // Execution starts here
