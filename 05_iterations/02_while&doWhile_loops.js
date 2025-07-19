// ---- Lecture(28): While and Do-While Loops ----


// while loop
let i = 0;
while (i <= 10) {
    console.log(`value of index is: ${i}`);
    i = i + 1; // incrementing i by 1
}

let myArray = ["flash", "batman", "superman", "spiderman"];

let arr = 0;
while (arr < myArray.length) {
    console.log(`value is : ${myArray[arr]} at index ${arr} of the array`);
    arr++; // incrementing arr by 1
}

// do-while loop
let score = 1
do {
    console.log(`Current score is: ${score}`);
    score++; // incrementing score by 1
} while (score < 10); // This will run at least once even if the condition is false