/**
 * 1. GLOBAL SCOPE
 * Definition: Variables declared outside any function or block.
 * Access: Can be seen by EVERYONE in the script.
 * Analogy: The Street Address of the building.
 */
let buildingName = "Tech Tower";

function securityOffice() {
  /**
   * 2. FUNCTIONAL SCOPE
   * Definition: Variables declared inside a function (using var, let, or const).
   * Access: Only visible inside THIS function.
   * Analogy: The Security Desk (only people inside the office see it).
   */
  let securityCode = "1234";

  if (true) {
    /**
     * 3. BLOCK SCOPE
     * Definition: Variables declared inside curly braces {} using let or const.
     * Access: Only visible inside those specific braces.
     * Analogy: A Private Locker inside the office.
     */
    let lockerKey = "Key-A1";
    console.log(lockerKey); // Works! (Inside the block)
  }

  // console.log(lockerKey); // ERROR: Locker is locked! (Outside the block)
  console.log(securityCode); // Works! (Inside the function)
}

securityOffice();
console.log(buildingName); // Works! (Global)
// console.log(securityCode); // ERROR: You aren't in the security office!
