// What is the use of IIFE? Name one real-world use case.

let shery = (function () {
    let score = 0;
    return {
        getScore: function () {
            console.log(score);
        },
        setScore: function (val) {
            score = val;
        },

    };
})();