// Q7: What does the ... operator mean in parameters?
// Here ... means rest a, b, c parameters will hold the first 3 arguments and rest will be hold by the ...val
function abcd(a, b, c, ...val) {
    console.log(a, b, c, val);
}
abcd(1, 2, 3, 4, 5, 6);