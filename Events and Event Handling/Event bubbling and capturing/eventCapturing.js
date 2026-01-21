let yellow = document.querySelector(".yellow");
let green = document.querySelector(".green");
let red = document.querySelector(".red");
let btn = document.querySelector("button");

btn.addEventListener("click", function (){
    console.log("Button Clicked");
});

red.addEventListener("click", function(){
    console.log("Red clicked");
});
green.addEventListener("click", function(){
    console.log("Green clicked");
});
yellow.addEventListener("click", function(){
    console.log("Yellow clicked");
}, true); // Event Captured So It Will Run First