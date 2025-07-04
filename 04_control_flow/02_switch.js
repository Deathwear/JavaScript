// --- Lec : Switch Statement
// Switch statement is used to execute one block of code among many alternatives.
// It is a cleaner way to write multiple if-else statements when you have many conditions to check.

const month = 3;

switch (month) {
  case 1:
    console.log("January");
    break;
  case 2:
    console.log("February");
    break;
  case 3:
    console.log("March");
    break;
  case 4:
    console.log("April");
    break;
  default:
    console.log("Invalid month");
    break;
}