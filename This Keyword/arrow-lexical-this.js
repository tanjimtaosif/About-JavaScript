/**
 * DEFINITION:
 * "Lexical This" means an arrow function does not create its own 'this'.
 * It "inherits" 'this' from the code that surrounds it.
 * * MOTIVE:
 * In the past, using functions inside timers (setTimeout) would "lose"
 * the connection to the object. Arrow functions fix this automatically!
 */

const counterApp = {
  count: 0,

  start: function () {
    const btn = document.getElementById("startBtn");
    const display = document.getElementById("display");

    btn.addEventListener("click", () => {
      // IMPORTANT: Because this is an ARROW FUNCTION, 'this'
      // still refers to 'counterApp'.
      // If this were a regular function, 'this' would refer to the Button!

      this.count++;
      display.innerText = this.count;
      console.log("Current Context (this):", this);
    });
  },
};

// Initialize the app
counterApp.start();

/* NEWBIE TIP: 
  When you are inside an object and need a function that "remembers" 
  the object (especially inside a click event or timer), 
  use an ARROW FUNCTION.
*/
