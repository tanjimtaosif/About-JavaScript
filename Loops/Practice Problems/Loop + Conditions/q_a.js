// a. Print numbers from 1 to 100
//         1. Print "Fizz" if divisible by 3
//         2. Print "Buzz" if divisible by 5
//         3. Print "FizzBuzz" if divisible by both

for(let num = 1; num <= 100; num ++){
    if ( num % 3 == 0 && num % 5 == 0){
        console.log(`FizzBuzz -> Divisible by Both`);
    } else if (num % 5 == 0) {
        console.log(`Buzz -> Divisible by 5`);
    } else if (num % 3 == 0) {
        console.log(`Fizz Divisible by 3`);
    } else{
        console.log(num);
    }
}