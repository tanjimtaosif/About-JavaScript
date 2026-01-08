// Q9: Use for-in to log all keys in this object:
//     const course = {
//         title: "JavaScript",
//         duration: "4 weeks",
//     };

const course = {
    title: "JavaScript",
    duration: "4 weeks",
};

for(let key in course){
    console.log(key);
}