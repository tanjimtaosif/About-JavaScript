let a = document.querySelector("h1");

 function dblClick(){
    a.style.color = "red";
}

a.addEventListener("dblclick", dblClick);
a.removeEventListener("dblclick", dblClick); // here we have to pass the same function to remove the Event Listener