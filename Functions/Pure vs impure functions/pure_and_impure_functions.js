// Pure and Impure Funtions
// Pure function -> Which function doesn't impect others that is pure functions 

// Here function abc is not effecting our variable a if we see. So it is a pure function. But our bdc function is effecting our variable so it's a impure function
let a = 12;
function abc() {
    console.log("Hello");
}

function bcd() {
    a++;
}