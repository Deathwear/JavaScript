/*
    >>Primitive
        7types: String, Number, Boolean, null, undefined, Symbol, BigInt



    >>Reference (Non Primitive)
        Array, Objects, Functions


    >>Javascript is Dynamically types language bcz variables don't needed to be declared  explicit data types.

*/

const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null   // typeof se datatype check krne pe object aayega output
let userEmail;  // It will take value as undefined by default
const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId);  // gives false as same value of symbols are also unique

const bigNumber = 3456543576654356754n   //last me n lgane se bigint represent hojyega

const heroes = ["shaktiman", "nagraj", "doga"]
let myObj = {
    name: "Aamir",
    age: 22,

}

//function can also be treated as variable for e.g;
const myFunction = function(){
    console.log("Hello World");

}


console.log(typeof bigNumber);
console.log(typeof myFunction); //iska output function hi aayega but it is called as object-function
console.log(typeof heroes); //Output will be object but is called as function-object

// link >> https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof