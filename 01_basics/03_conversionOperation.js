// 6th lecture of Chai aur code (Datatype conversion confusion)

// here we try to convert the datatypes into number data type
let score = "33abc"

console.log(typeof score);
console.log(typeof (score));

let valueInNumber = Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);  // it will give NaN (not a number) 
// will give 0 in case of null 
// NaN in case of undefined 
// in boolean, it will convert 1 for true & 0 for false
// support string which can not be converter like "aamir" then it will give NaN 


let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

// 1 is coverted into true
// 0 is converter false
// empty string is converted to false
// any string like "aamir" will be converted to true

let someNumber = 33
let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber);

