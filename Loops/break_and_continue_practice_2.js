// Q2: Skip Multiples of 3

// Write a loop from 1 to 20 that: 
// Skips numbers divisible by 3 Prints all others
// - Use continue
// - Expected output:
//   1 2 4 5 7 8 10 11 ... (no 3, 6, 9, etc.)

for (let i = 1; i < 21; i++) {
    if (i % 3 === 0) continue;
    console.log(i);

}