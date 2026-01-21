let abcd = document.querySelector("#abcd");

abcd.addEventListener("mouseover", function(){
    abcd.style.backgroundColor = "yellow";
});
abcd.addEventListener("mouseout", function(){
    abcd.style.backgroundColor = "red";
});

