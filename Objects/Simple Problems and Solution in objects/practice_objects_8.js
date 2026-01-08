// Q8: Destructure the key "first-name" as a variable called
// firstName.
//     const user = {
//         "first-name": "Mahtab",
//     };

const user = {
    "first-name": "Mahtab",
};

let { 'first-name': firstName } = user;

console.log(firstName);
