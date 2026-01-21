let inp = document.querySelector("input");

inp.addEventListener("input", function(event){
    // console.log(event.data); // it will print our input data
    if(event.data !== null){
        console.log(event.data);
    }
});