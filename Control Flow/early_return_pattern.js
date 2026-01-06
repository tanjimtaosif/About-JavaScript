function checkAge(age) {
    // Check for "bad" input first (Early Return)
    if (age < 0) return "Invalid age!";
    if (age < 18) return "Too young.";

    // If we get here, we know the age is fine
    return "Welcome to the club!";
}

console.log(checkAge(20)); // "Welcome to the club!"