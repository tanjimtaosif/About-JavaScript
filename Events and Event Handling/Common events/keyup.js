let h1 = document.querySelector("h1");
let main = document.querySelector("#main");

// 1. KEYDOWN: Trigger the "Active" state
window.addEventListener("keydown", function (details) {
    // Handle Space
    let keyName = details.key === " " ? "Space" : details.key;
    
    h1.textContent = keyName;
    
    // Add visual feedback
    h1.classList.add("active");
    main.style.background = "#222"; 
});

// 2. KEYUP: Trigger the "Reset" state
window.addEventListener("keyup", function (details) {
    // Remove the visual feedback
    h1.classList.remove("active");
    main.style.background = "#1a1a1a";
    
    console.log("Key Released: " + details.key);
});