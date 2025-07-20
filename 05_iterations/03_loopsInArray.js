// --- lecture (29): High Order Array loops ---

const arr = [1, 2, 3, 4, 5];

// forof loop
for (const num of arr) {
  console.log(num);
}

const greeting = "Hello, World!";
// forof loop with string
for (const greet of greeting) {
  console.log(`each character is: ${greet}`);
}

//Maps
// refer: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map

const map = new Map();
map.set("IN", "India");
map.set("USA", "United States of America");
map.set("Fr", "France");

// console.log(map);

//	A Map is safe to use with user-provided keys and values.
// forof loop with Map
for (const [key, value] of map) {
  console.log(`Key: ${key}, Value: ${value}`);
}

//forof loop with objects
const myObj = {
  game1: "NFS",
  game2: "Spiderman",
};

// for (const element of myObj) {
//     console.log(element);
// This will throw an error because objects are not iterable
// }

// To iterate over an object, we can use Object.entries() or Object.keys()
for (const [key, value] of Object.entries(myObj)) {
  //Object.entries returns an array of key-value pairs
  console.log(`Key: ${key}, Value: ${value}`);
}

// if i have to iterate over keys only
for (const key of Object.keys(myObj)) {
  console.log(`Key: ${key}`);
}
