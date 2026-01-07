// Q9. Count how many numbers between 1 to 100 are divisible by both 3 and 5.
for (let i = 1; i < 101; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(`Numbers div by 3 & 5`, i);
    }
}