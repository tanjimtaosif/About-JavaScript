// The = 0 assigns a "Default Value" to the parameters.
// If an argument is provided, it uses that. 
// If nothing is provided, it uses 0.
function add(v1 = 0, v2 = 0) {
    console.log(v1, v2);
}

// Scenario 1: Both arguments provided
add(1, 4); // Output: 1 4

// Scenario 2: No arguments provided
add();    // Output: 0 0 (instead of undefined undefined)

// Scenario 3: Only one argument provided
add(5);   // Output: 5 0