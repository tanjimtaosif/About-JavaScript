// 1. Select the button and the navbar
let signupBtn = document.querySelector(".btn-signup");
let navbar = document.querySelector(".navbar");

// 2. Add event to the Button (The Child)
signupBtn.addEventListener("click", function() {
    console.log("1. Button Clicked!");
    alert("Button Event Fired!");
});

// 3. Add event to the Navbar (The Parent)
navbar.addEventListener("click", function() {
    console.log("2. Navbar Clicked! (The event bubbled up)");
    alert("Navbar Event Fired because of Bubbling!");
});