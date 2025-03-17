// 6th lecture of Chai aur code (Datatype conversion confusion)

// here we try to convert the datatypes into number data type
let score = "33abc";

console.log(typeof score);
console.log(typeof score);

let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber); // it will give NaN (not a number)
// will give 0 in case of null
// NaN in case of undefined
// in boolean, it will convert 1 for true & 0 for false
// support string which can not be converter like "aamir" then it will give NaN

let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

// 1 is converted into true
// 0 is converter false
// empty string is converted to false
// any string like "aamir" will be converted to true

let someNumber = 33;
let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber);

// *************** lecture 7 **************************
// *************** Operation **************************

let value = 3;
let negValue = -value;
console.log(negValue);

/* 
console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**2);
console.log(2/3);
console.log(2%3);
*/

let str1 = "Hello";
let str2 = " Aamir";
let str3 = str1 + str2;
console.log(str3); // this will add up the strings

console.log("1" + 2); //12
console.log(1 + "2"); // 12
console.log("1" + 2 + 2); // 122
console.log(1 + 2 + "2"); // 32
console.log(3 + ((4 * 5) % 3)); // this is only useful in exams not in writing code

// operation will be done on the basis which datatype is coming first

console.log(+true);
console.log(+"");

let num1, num2, num3;
num1 = num2 = num3 = 2 + 2;

let gameCounter = 100;
gameCounter++; //prefix and postfix operator
console.log(gameCounter);

//prefix and postfix operator
//prefix
let x = 5;
let y = ++x; // x becomes 6, then y is assigned 6
console.log(x, y); // Output: 6 6

//postfix
let a = 5;
let b = a++; // b gets 5, then a becomes 6
console.log(a, b); // Output: 6 5
/*
Key Difference:
    Prefix updates first, then returns the value.
    Postfix returns the original value first, then updates.
    if ++ value comes first then it means first add the value then print it , if ++ value comes last then it means first print the value of b then increase the value of a then print it.
    
    documentation link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment
*/
