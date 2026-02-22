// Promises represent an operation that will eventually settle into one of two states: resolved or rejected. To handle these outcomes properly, we must write code to account for both possibilities.
let pr = new Promise(function (res, rej) {
  setTimeout(() => {
    let rn = Math.floor(Math.random() * 10);
    if (rn > 5) res("Resolved with: " + rn);
    else rej("rejected with: " + rn);
  }, 2000);
});
// we track a Promise through three specific "stages"
// Pending, Fulfilled and Rejected
pr.then(function (val) {
  console.log(val);
}).catch(function (val) {
  console.log(val);
});
