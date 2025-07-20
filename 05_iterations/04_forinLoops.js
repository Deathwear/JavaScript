// ---lecture (29): For-in Loops----
// for-in loop is used to iterate over the properties of an object or the indices of an array.


const myObject = {
    js : "JavaScript",
    py : "Python",
    rb : "Ruby",
    swift : "Swift by Apple"
}
// for-in loop with object
for (const key in myObject) {
    console.log(`${key} for ${myObject[key]}`);
}

// for-in loop with array
const myArray = ["JavaScript", "Python", "Ruby", "Swift"];
for (const index in myArray) {
    console.log(`Index: ${index}, Value: ${myArray[index]}`);
}

// for-in loop with MAP
const myMap = new Map();
myMap.set("IN", "India");
myMap.set("USA", "United States of America");
myMap.set("Fr", "France");
// for-in loop with Map
for (const key in myMap) {
    console.log(`Key: ${key}, Value: ${myMap[key]}`);
}
// Note: Using for-in with Map is not recommended as it iterates over the keys, not the entries.
// Instead, use for-of loop with Map as shown in the previous example.

