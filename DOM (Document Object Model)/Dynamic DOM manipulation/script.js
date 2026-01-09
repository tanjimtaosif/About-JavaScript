// Create element
// Then append or prepend where is needed
// append will add in the last and prepend will add to the start 

let h1 = document.createElement("h1");
let h2 = document.querySelector("h2");
h1.textContent = "Have some food";
h2.remove();

// document.body.append(h1); we can append body like this or in below method 
document.querySelector("body").prepend(h1)
