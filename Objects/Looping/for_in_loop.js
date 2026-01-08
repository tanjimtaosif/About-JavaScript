let obj = {
    //  key: 'Value'
    name: "Tanjim",
    age: 23,
    email: "test@test.com",
};

for (let key in obj) {
    // console.log(obj[key]); // Prints the value
    // console.log(key); // Prints the keys
    console.log(key, obj[key]); // Prints key and value both

}