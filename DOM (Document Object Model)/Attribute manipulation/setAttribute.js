// setAttribute

let img = document.querySelector("img");
let a = document.querySelector("a");
// a.href = "https://www.google.com/"; that's how can change href of our a tag

img.setAttribute("src", "https://images.unsplash.com/photo-1667372393086-9d4001d51cf1?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")
a.setAttribute("href", "https://unsplash.com/") // Using setAttribute to set link to the href
console.dir(a);
