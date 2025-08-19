function getVal(val) {
    if (val < 25) return "D";
    else if (val < 50) return "C";
    else if (val < 75) return "B";
    else return "A";
};

console.log(getVal(65));
