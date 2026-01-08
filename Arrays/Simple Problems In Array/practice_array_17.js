// Q17: Add "India" to the start of this array using spread:
//     let countries = ["USA", "UK"];

let countries = ["USA", "UK"];
let arrCountries = ["USA", "UK"];
countries = ["Bangaldesh", ...countries]

newCountries = [...arrCountries];
newCountries.unshift("Bangaldesh");

console.log(countries);
console.log(newCountries);
