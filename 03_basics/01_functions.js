//-----------lec:18 (function) ----------

function sayMyName() {
  console.log("H");
  console.log("I");
  console.log("T");
  console.log("E");
  console.log("S");
  console.log("H");
}

//sayMyName();

/*
    NOTE: 
        if we add brackets it means we are executing the function or if we write only name then it means we are just using the reference
    for e.g; execution: sayMyName()
             reference: sayMyname
    
*/

function addTwoNumbers(number1, number2) {
  console.log(number1 + number2); //it will only print the number but not return it
}

function addTwoNumbers2(number1, number2) {
  //let result2 = number1 + number2
  //return result2
  return number1 + number2; //it will return the number to the function call but not print it
  console.log("Aamir"); //this is unreachable code bcz once code is executed and finished no other output will be given
}

const result = addTwoNumbers2(3, 5);
console.log("result: ", result); //it will print the result from the function called
//output will be undefined in case of addTwoNumbers

function loginUserMessage(username) {
  if (!username) {
    //username == undefined
    console.log(`please enter a username`);
    return;
  }
  return `${username} just logged in`;
}

console.log(loginUserMessage("Aamir"));
console.log(loginUserMessage());
