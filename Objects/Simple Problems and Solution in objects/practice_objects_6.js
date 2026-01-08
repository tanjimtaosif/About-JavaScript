// Q6: What will happen if coordinates is missing? How can you prevent errors?
let user = {
    name: "Tanjim"
    // coordinates key is missing
};

/**
 * SOLUTION:
 * Use ?. before accessing 'coordinates' and 'lat'.
 * This tells JavaScript: "If coordinates is missing, stop and return undefined."
 */
let latitude = user?.coordinates?.lat;
console.log(latitude);
// Output: undefined (The app doesn't crash!)