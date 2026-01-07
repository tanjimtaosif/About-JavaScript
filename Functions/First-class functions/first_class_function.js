// assign to variables, pass as arguments, return from other functions
// here function treated like values 
function abc(val) {
    val();
}

abc(function () {
    console.log('Hey');
})