// Q7: Destructure the city and lat from the location object below:
//     const location = {
//         city: "Rampura",
//         coordinates: {
//             lat: 23.2,
//             lng: 77.4,
//         },
//     };

const location = {
    city: "Rampura",
    coordinates: {
        lat: 23.2,
        lng: 77.4,
    },
};

let { city } = location;
let { lat } = location.coordinates;

console.log(city , lat);
