const name = "aamir";
const repoCount = 50;

//console.log(name + repoCount + "Value");
//we can use backticks for representing string bcz it is convenient for operation
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

console.log("hello");

//another war of declaring string
const gameName = new String("Aamir-reza");

//Accessing key value pair
console.log(gameName[0]); //Access key value pair
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(4)); //index starts from zero
console.log(gameName.indexOf("r"));

const newString = gameName.substring(0, 4); //last value is not included
console.log(newString);

const anotherString = gameName.slice(-10, -4); // negative for the back, positive for the front), this combination causes an default string index value to be returned.
console.log(anotherString);

const newStringOne = "    aamir   ";
console.log(newStringOne);
console.log(newStringOne.trim()); //removes whitespace from both ends of this string and returns a new string, without modifying the original string.

const url = "https://aamir.com/aamir%20reza";
console.log(url.includes("aamir")); // checks this keyword is present in url or not

//concatenating string based on any character like '-'

const gameName2 = new String("aamir-reza-ar-deathwear");
console.log(gameName2.split("-"));
//expected output; ['aamir', 'reza', 'ar', 'deathwear' ]
/* ------(SYNTAX)--------
    split(separator)
    split(separator, limit)

    link for split: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split

    TIPS: Use backticks syntax for writing strings
*/
