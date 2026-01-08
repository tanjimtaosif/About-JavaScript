// Q13: Deep clone the obj1 safely.
// const obj1 = { info: { score: 80 } };

const obj1 = {
    info: {
        score: 80
    }
};

let newObj = JSON.parse(JSON.stringify(obj1));
newObj.info.score = 100;

console.log(obj1);
console.log(newObj);
