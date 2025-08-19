// case 1: → If val === 1, run this block (currently empty).
// case 2: → If val === 2, run this block (currently empty).
// case 3: → If val === 3, run this block (currently empty).
// default: → Runs if val doesn’t match 1, 2, or 3.

let val = 2;
switch (val) {
    case 1:
        console.log("Value is One");
        break;
    case 2:
        console.log("Value is Two");
        break;
    case 3:
        console.log("Value is Three");
        break;
    default:
        console.log("Value not found");
}
