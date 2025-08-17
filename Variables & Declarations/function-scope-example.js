// Function scope illustration

function demo() {
    if (true) {
        var insideFunc = 12;   // function-scoped
        let blockVar = 99;     // block-scoped
    }

    console.log(insideFunc); // it will work
    // console.log(blockVar); it won't
}
