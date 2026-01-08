let role = "admin"; // This variable holds the name of the key we want to create

let obj = {
    name: "Tanjim",
    age: 23,
    email: "test@test.com",
    address: {
        city: 'Dhaka',
        Village: 'Bashundhara'
    },
    // COMPUTED PROPERTY: 
    // The [role] tells JS: "Don't name the key 'role', use the VALUE of the variable role."
    // Since role = "admin", the key becomes "admin".
    [role]: "Tanjim"
};

console.log(obj);
// Output: { ..., admin: "Tanjim" }
