// Create a new list item <li>New Task</li> and add it to the end of a <ul>.

let ul = document.querySelector("ul")

let li = document.createElement("li");
li.textContent("Dark Red Apple");

console.log(ul.append(li));