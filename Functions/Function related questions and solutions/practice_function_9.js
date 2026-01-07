// Q9: Solve this using early return pattern: 

//     function checkAge(age) {
//         if (age < 18) {
//         console. log("Too young") ;
//         } else {
//         console. log ("Allowed");
//         }
//     }

function checkAge(age) {
    if (age < 18) return "Too Young";
    return ("Allowed");
}
console.log(checkAge(23));
 