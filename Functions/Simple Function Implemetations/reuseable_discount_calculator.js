function discountCalculator(discount) {
    return function (price) {
        return price = price - price * (discount / 100);
    };
};

let ten = discountCalculator(10);
let twenty = discountCalculator(20);
console.log(ten(200));
console.log(twenty(200));
