// Add a highlight class to every even item in a list.

let li = document.querySelectorAll("ul li:nth-child(2n)");
li.forEach(function (element) {
    element.classList.add("highlight");
});