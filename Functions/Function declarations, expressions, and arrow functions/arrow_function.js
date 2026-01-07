// fat arrow function
// "We shouldn't use arrow functions for object methods because they don't have their own this. This means they can't access other properties inside the same object."
let fnc = () => {
    console.log("Hello There");
}
fnc();