let abcd = document.querySelector("#abcd");

window.addEventListener("mousemove", function(axis) {
    abcd.style.top = axis.clientY + "px";
    abcd.style.left = axis.clientX + "px";
})