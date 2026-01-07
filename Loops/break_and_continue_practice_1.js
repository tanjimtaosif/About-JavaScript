// Q1: Stop at First Multiple of 7
// Write a loop from 1 to 100 that:
// - Prints each number
// - Stops completely when it finds the first number divisible by 7

for (let i = 1; i < 101; i++) {
    console.log(i);

    if (i % 7 === 0) {
        break;
    }
}