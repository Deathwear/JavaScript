//--- lecture
// Truthy and Falsy values in JavaScript
// In JavaScript, values can be categorized as "truthy" or "falsy" based on how they behave in a boolean context.
// Truthy values are those that evaluate to true in a boolean context, while falsy values evaluate to false.

const userEmail = "a@amir.ai";
if (userEmail) {
  console.log("User email is provided");
} else {
  console.log("User email is not provided");
}
// it is considered truthy because it is a non-empty string.
// truthy values include:
// - Non-empty strings (e.g., "hello", "0", "false")
// - Non-zero numbers (e.g., 1, -1, 3.14)
// - Objects (e.g., {}, [])
// - Arrays (e.g., [1, 2, 3])
// - Functions (e.g., function() {})
// - Dates (e.g., new Date())
// - Any other value that is not explicitly falsy

// Falsy values, on the other hand, are those that evaluate to false in a boolean context.
// For example, if the userEmail variable is an empty string, it will be considered falsy:
// Falsy values in JavaScript include:
// - false (the boolean value)
// - 0 (the number zero)
// - "" (an empty string)
// - null (the absence of any value)
// - undefined (a variable that has not been assigned a value)
// - NaN (not a number, which is the result of an invalid mathematical operation)



// to check array is empty or not
const userRoles = [];
if (userRoles.length === 0) {
    console.log("Array is empty");
}

// to check object is empty or not
const user = {};
if (Object.keys(user).length === 0) {
    console.log("Object is empty");
}
// to check string is empty or not
const userName = "";
if (userName.length === 0) {
    console.log("String is empty");
}
