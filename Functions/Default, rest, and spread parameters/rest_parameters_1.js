// When we have too many arguments, then we have to create all parameters equal to our arguments. Then we use rest to pass the arguments to a single parameters. rest use in function parameter space.
function abc(...val) {
    console.log(val);
}
abc(1, 23, 43, 54, 4345, 52)