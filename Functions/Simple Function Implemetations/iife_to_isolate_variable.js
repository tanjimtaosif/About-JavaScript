// Here we created secret pass using iife witch is not accessable outside
(function () {
    const pass = "Secret pass"
    console.log(pass);

})();

console.log(pass);
