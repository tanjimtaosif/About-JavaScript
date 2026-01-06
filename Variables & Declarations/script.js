function letExample() {
    if (true) {
        let blockScoped = "I am trapped in this IF statement";
        var functionalScoped = "I am not trapped in this IF statement";
        console.log(blockScoped); // Works
    }
    // console.log(blockScoped); // Error: blockScoped is not defined here
    console.log(functionalScoped); // Wroks
}
letExample();