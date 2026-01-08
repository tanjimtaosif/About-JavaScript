const user = {
    name: "Tanjim",
    address: {
        city: "Dhaka",
        pin: 1229,
        location: {
            lat: 23.2,
            lng: 77.4,

        },

    },
};

let { lat, lng } = user.address.location;
console.log(lat);
console.log(lng);
