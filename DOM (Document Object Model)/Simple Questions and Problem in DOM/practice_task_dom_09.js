// Create a new image element with a placeholder source and add it at the top of a div.

let img = document.createElement("img");
img.setAttribute("src", "https://images.pexels.com/photos/2819290/pexels-photo-2819290.jpeg" );
img.classList.add("placeholder")

document.querySelector("div").prepend(img); 