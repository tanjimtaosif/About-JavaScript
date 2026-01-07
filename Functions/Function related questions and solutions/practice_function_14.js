// Q14: What is a higher-order function?
// a function that returns a function or accept a function as parameter

function abc(value) {
    value();
}

abc(function () {
    console.log("Hi");
})