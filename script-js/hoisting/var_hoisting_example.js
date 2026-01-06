console.log(a); // Output: undefined (No error!)
var a = 12;

/**
 * What the Browser actually sees:
 * var a;           <-- Declaration moved to top (Hoisted)
 * console.log(a);  <-- It's 'undefined' at this point
 * a = 12;          <-- Assignment stays where it was
 */