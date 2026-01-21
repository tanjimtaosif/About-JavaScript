// Chamge event runs when our any input or text area changed

let sel = document.querySelector("select");
let device = document.querySelector("#device")

sel.addEventListener("change", function(details) {
    device.textContent = `${details.target.value} selected`; 
    console.log(details.target.value);
})