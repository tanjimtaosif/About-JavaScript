// Closure → When a function returns another function, and the returned function uses variables from its parent function
function func() {
    let a = 13;
    return function () {
        console.log(a);
    }
}