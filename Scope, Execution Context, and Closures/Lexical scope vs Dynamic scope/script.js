// --- 1. LEXICAL SCOPING (What JavaScript actually uses) ---
// Rule: A function remembers its "birthplace." It looks at where it was WRITTEN.

function createStore() {
    let storeDiscount = 10; // Defined in the outer function

    function displayDiscount() {
        // This works because displayDiscount was WRITTEN inside createStore.
        // It has access to its parent's variables.
        console.log(`Lexical Scoping: The discount is ${storeDiscount}%`);
    }
    
    displayDiscount();
}

createStore();


// --- 2. DYNAMIC SCOPING (Conceptual - JS does NOT work this way) ---
// Rule: A function looks at who CALLED it. 

let globalPrice = 100;

function printPrice() {
    // In Dynamic Scoping, this would look for 'globalPrice' inside 'checkout'.
    // In JavaScript (Lexical), this ALWAYS looks at the global variable (100).
    console.log(`Dynamic Concept: The price is ${globalPrice}`);
}

function checkout() {
    let globalPrice = 50; // A local version of price
    printPrice(); // printPrice is CALLED here
}

checkout();