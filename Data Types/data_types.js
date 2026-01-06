// Data types
// Primitives -> string, number, boolean, null, undefined, symbol, bigint

// String --->
// '' - signle quotes
// "" - double quotes
// `` -  backticks

// Number --->
//  12 - integer number
//  12.3 - float number

// Boolean--->
// true and false
// let a = true;
// let b = false;

// Null ---> Absance of value
// letSelectedStrudents = null;

// Undefined ---> Means declaraing variable without any value which gets undefined

// Symbol ---> Unique immutable value
let obj = {
    uid : 1,
    name : 'Tanjim',
    age : 24,
    email : 'mahtab23454@gmail.com'
}

let u1 = symbol("uid");
obj[u1] = "001";

// BigInt --->
// Number.MAX_SAFE_INTEGER -> Maximun integer value that aregular variable can hold properly which is (9007199254740991)

// let a = 9007199254740991n;
// a = a + 15n; 


// Reference -> arrays [], objects {}, functions ()

// Array --->
let a = [1,2,3];
let b = a;

b.pop(); // Here we are popping from b but it also pop data from a also becasue in reference data its gives us the reference of the value not the real data that why it also updates the a.

// Objects
let o = {
    name: "Mahtab"
}

let n = o;
n.name= "Tanjim";