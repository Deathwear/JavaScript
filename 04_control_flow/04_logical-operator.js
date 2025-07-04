//--------- (logical-operator) ---------
// Logical operators are used to combine two or more conditions.
// They return a boolean value (true or false) based on the evaluation of the conditions.
// The most common logical operators in JavaScript are:
// AND (&&), OR (||), and NOT (!).

const isUserLoggedIn = true;
const isUserAdmin = false;
const isUserActive = true;
const isUserVerified = true;

// AND (&&) operator
// The AND operator (&&) returns true if both conditions are true, otherwise it returns false
if (isUserLoggedIn && isUserActive) {
  console.log("User is logged in and active");
}
if (isUserAdmin && isUserVerified) {
  console.log("User is an admin and verified");
}
if (isUserLoggedIn && isUserAdmin && isUserActive) {
  console.log("User is logged in, admin, and active");
}
// OR (||) operator
// The OR operator (||) returns true if at least one of the conditions is true, otherwise it returns false
if (isUserLoggedIn || isUserAdmin) {
  console.log("User is either logged in or an admin");
}
if (isUserActive || isUserVerified) {
  console.log("User is either active or verified");
}
if (isUserLoggedIn || isUserAdmin || isUserActive) {
  console.log("User is logged in, admin, or active");
}
// NOT (!) operator
// The NOT operator (!) negates the boolean value of a condition, returning true if the condition is false, and false if the condition is true
if (!isUserLoggedIn) {
  console.log("User is not logged in");
}
if (!isUserAdmin) {
  console.log("User is not an admin");
}
if (!isUserActive) {
  console.log("User is not active");
}
if (!isUserVerified) {
  console.log("User is not verified");
}

// Combining logical operators
if (isUserLoggedIn && (isUserAdmin || isUserActive)) {
  console.log("User is logged in and either an admin or active");
}
if (isUserLoggedIn || (isUserAdmin && isUserActive)) {
  console.log("User is either logged in or both an admin and active");
}

// -------- Nullish Coalescing Operator (??) --------
// The Nullish Coalescing Operator (??) is used to provide a default value when a variable is null or undefined.

let val1;
val1 = null ?? 10; // If val1 is null or undefined, it will be assigned the value 10
console.log(val1); // Output: 10

let val2 = undefined ?? 15; // If val2 is null or undefined, it will be assigned the value 15
console.log(val2); // Output: 15

val3 = null ?? 10 ?? 20; // If val3 is null or undefined, it will be assigned the value 10
console.log(val3); // Output: 10



// Terniary Operator
// The Ternary Operator (?:) is a shorthand way to write an if-else statement.

// condition ? true : false;
const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("Ice tea is affordable") : console.log("Ice tea is expensive");
