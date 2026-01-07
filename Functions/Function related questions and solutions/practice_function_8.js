// Use rest parameter to accept any number of scores and

function getScore(...scores) {
    let total = 0;
    scores.forEach(function (val) {
        total = total + val;
    });
    return total;
}

console.log(getScore(10, 12, 14, 18));