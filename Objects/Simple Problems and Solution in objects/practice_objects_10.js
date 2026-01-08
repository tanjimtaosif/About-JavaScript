// Use Object.entries() to print all key-value pairs as:
// Output:
// title: JavaScript
// duration: 4 weeks
const course = {
    title: "JavaScript",
    duration: "4 weeks",
};

Object.entries(course).forEach(function (value) {
    console.log(value[0] + ": " + value[1]);
});
