// ----------- Lecture 26: Control Flow -----------

// --- if ----
// if (true) {
//   console.log("This will always run");
// }

// if (false) {
//   console.log("This will never run");
// }
// if (1 === 1) {
//   console.log("This will always run");
// }
// if (1 === 2) {
//   console.log("This will never run");
// } else {
//   console.log("This will run");
// }
// if (1 === 1) {
//   console.log("This will always run");
// } else {
//   console.log("This will never run");
// } else {
//   console.log("This will never run"); // This will cause a syntax error
// }

const isUserLoggedIn = true;
if (isUserLoggedIn) {
  console.log("User is logged in");
}
if (!isUserLoggedIn) {
  console.log("User is not logged in");
}

const temperature = 30;
if (temperature > 30) {
  console.log("It's a hot day");
} else if (temperature < 20) {
  console.log("It's a cold day");
} else {
  console.log("It's a pleasant day");
}

const score = 200;
if (score > 100) {
  const power = "flying";
  console.log(` User power : ${power}`);
}

const balance = 1000;
// if (balance > 500) console.log("You are rich"); // Single line if statement

// if (balance > 500) console.log("You are rich"); else console.log("You are poor"); // This will cause a syntax error/

if (balance > 500) {
  console.log("You are rich");
} else if (balance > 100) {
  console.log("You are middle class");
} else {
  console.log("You are poor");
}



//real life example

const UserLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if (UserLoggedIn && debitCard) {
  console.log("You can buy the product");
} 
if (loggedInFromGoogle || loggedInFromEmail) {
  console.log("You can login to the site"); 
}  