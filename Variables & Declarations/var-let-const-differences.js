// Declaration differences: var vs let vs const

var a = 12;        // function-scoped, redeclarable
let b = 20;        // block-scoped, not redeclarable
const c = 30;      // block-scoped, not redeclarable, cannot reassign

// let b = 25;     // Error
// const c = 40;   // Error: Cannot reassign
