// ----- Lecture: 27 (for loop) -----

// for loop
for (let i = 0; i <= 10; i++) {
  const element = i;
  if (element == 5) {
    console.log("5 is the best number");
  }
  console.log(element);
}
// console.log(element); // This will throw an error because 'element' is not defined outside the loop

for (let i = 1; i <= 10; i++) {
  console.log(`Outer loop value: ${i} `);
  for (let j = 1; j <= 10; j++) {
    //console.log(`Inner loop value: ${j} and inner loop ${i}`);
    console.log( i + '*' + j + ' = ' + (i * j));
    
     
  }
}

//for loop with array
let myArray = ["flash", "batman", "superman", "spiderman"];
  for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element); 

  }


  // break and continue
for (let i = 1; i <= 20; i++){
  if (i == 5) {
    console.log("detected 5, breaking the loop");
    break; // This will exit the loop when i is 5
  }
  console.log(`value of i is: ${i}`);
  
}
// continue
for (let i = 1; i <= 20; i++){
  if (i == 5) {
    console.log("detected 5, skipping this iteration");
    continue; // This will skip the current iteration when i is 5
  }
  console.log(`value of i is: ${i}`);
  
} 