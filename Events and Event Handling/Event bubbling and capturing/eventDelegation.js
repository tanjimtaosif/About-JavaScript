let ul = document.querySelector("ul");

ul.addEventListener("click", function(details) {
    if (details.target.tagName === "LI") {
        details.target.classList.toggle("lt");
    }
});