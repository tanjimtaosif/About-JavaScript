// Scope: Global, Block, and Function

var g = 100; // Global

{
    var g = 200; // var ignores block scope
    let blockScoped = 300;  // let respects block
    const anotherBlock = 400;
}

console.log(g); // 200
// console.log(blockScoped); Error
