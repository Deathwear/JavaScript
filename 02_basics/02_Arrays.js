// ----------- Lecture:15 (Arrays-2) -------------

const marvel_heroes = ["Thor", "Ironman", "Spiderman"];
const dc_heroes = ["Superman", "Flash", "Batman"];

//marvel_heroes.push(dc_heroes)   //it pushes array inside of a array not a single array that we don't want
//console.log(marvel_heroes);  
//console.log(marvel_heroes[3][1]);  //Expected output: flash (after pushing dc heroes)


marvel_heroes.concat(dc_heroes)
console.log(marvel_heroes);
// expected output: ['Thor', 'Ironman', 'Spiderman' ]


const allHeroes = marvel_heroes.concat(dc_heroes)
console.log(allHeroes);  //all makes a single array



//spread operator
const allnewHeroes = [...marvel_heroes, ...dc_heroes]
console.log(allnewHeroes);

//spread is more flexible to use than concat (more preferable)


const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const usable_another_array = another_array.flat(Infinity)
console.log(usable_another_array);  // all concatenated into one array


console.log(Array.isArray("Aamir"));   // not array
//converting it to a array
console.log(Array.from("Aamir"));
console.log(Array.from({name: "Aamir"})); //will give empty array if keys are not declared

//multiple variables converted into arrays
let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));


//read mainly about "isArray", ".from", ".of" operations in array
