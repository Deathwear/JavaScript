/********************** lecture-8 *******************/


/*
console.log(2 > 1);
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 == 1);
console.log(2 != 1);
        this will give result in boolean value
*/


// when we don't compare same datatypes

console.log("2" > 1);
console.log("02" > 1);   // this will return true in boolean format

console.log(null > 0);   //false
console.log(null == 0);  //false
console.log(null >= 0);  //true  (because of equality and comparision works differently in JS)
/* equality check == and comparisions > < >= <= work differently
comparision convert null to a number, treating it as 0.
that's why (3) null >=0 is true and (1)null > 0 is false.
*/