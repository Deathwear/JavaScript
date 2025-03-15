const score = 400;
console.log(score);

const balance = new Number(100); //specifically stating as num
console.log(balance);

console.log(balance.toString());
console.log(balance.toString().length);
console.log(balance.toFixed(2)); //converted into decimal places
//always use toFixed when making an E-commerce application

const otherNumber = 23.8966;
console.log(otherNumber.toPrecision(3)); //returns a string

const hundreds = 1000000;
console.log(hundreds.toLocaleString()); //represent in us value
console.log(hundreds.toLocaleString("en-IN")); //represent in indian value

/*number is  a data type. many functions in numbers
    max. min. epsilon etc*/




// ++++++++++ Maths ++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4));//-ve will be converted to +ve
console.log(Math.round(4.6));//expected output:5
console.log(Math.ceil(4.2));//expected output: 5
console.log(Math.floor(4.9));//expected output:4
console.log(Math.min(4, 3, 6, 8));
console.log(Math.max(4, 3, 6, 8));

console.log(Math.random());  //output will be between 0 to 1
console.log((Math.random()*10) + 1); //output will be between 1 to 10
console.log(Math.floor(Math.random()*10) + 1); //round-off to the lowest integral value

// random no. b/w any two number can be explained as:
const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min)
