let nm = document.querySelector("#name");
let form = document.querySelector("form");

form.addEventListener("submit", function(details){
    details.preventDefault();

    if(nm.value.length <= 2){
        document.querySelector("#hide").style.display = "initial";
    } else{
        document.querySelector("#hide").style.display = "none";
    }
}); 