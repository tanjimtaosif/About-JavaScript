// Select all <li> elements and print their text using a loop.

let list = document.querySelectorAll("li");

// list.forEach(function (value) {
//     console.log(value.textContent);
// })

// Solution by for loop 
list = document.querySelectorAll("li");
for (let i = 0; i < list.length; i++) {
    console.log(list[i].textContent);
}