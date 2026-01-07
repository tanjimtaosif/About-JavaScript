// Q8. Ask the user for a number and print whether each number from 1 to that number is even or odd.
//     (e.g., "1 is odd", "2 is even", ... )

let val = prompt("Give a numver");

for (let i = 1; i <= val; i++) {
    if (i % 2 === 0) {
        console.log(`${i} is even`);
    } else {
        console.log(`${i} is odd`);
    }
}
