// Q3: Print First 5 0dd Numbers Only
// Write a loop from 1 to 100 that:
// Prints only 5 odd numbers Then stops the loop
// - Use both if, continue, and a counter + break
// - Expected output:
//   1 3 5 7 9

count = 0;
for (let i = 1; i < 101; i++) {
    if (i % 2 == 1) {  
        console.log(i);
        count++;
    }
    if (count === 5) break;
}