// 1. GLOBAL/PARENT SCOPE
// We declare 'a' in the main scope
let a = 10; 

{
    // 2. BLOCK SCOPE
    // This is a NEW variable 'a'. 
    // It only exists inside these curly braces.
    // It "shadows" the 'a' from the line above.
    let a = 20; 
    
    console.log("Inside the block:", a); // Output: 20
}

// 3. BACK TO PARENT SCOPE
// Once we leave the braces, the inner 'a' is destroyed.
// We are back to seeing the original 'a'.
console.log("Outside the block:", a); // Output: 10