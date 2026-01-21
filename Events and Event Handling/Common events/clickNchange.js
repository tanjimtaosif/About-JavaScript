let upld = document.querySelector("#upld");
let fileinput = document.querySelector("#fileinput")

upld.addEventListener("click", function () {
    fileinput.click();
})

fileinput.addEventListener("change", function(details){
   const file = details.target.files[0];

   if(file){
    upld.textContent = file.name;
   }
})