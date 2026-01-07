// Q13: Pass a function into another function and execute it inside.

function abc (value){
    value();
}

abc(function(){
    console.log("Hi");
})