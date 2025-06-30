// ------------lecture: 23 (Arrow Functions)------------
// Arrow functions are a more concise syntax for writing function expressions in JavaScript.   
// They are particularly useful for writing short functions and for maintaining the context of `this` in callbacks.
// Syntax:
// const functionName = (parameters) => {
//     // function body
// }; 

const user = {
    username: "Aamir",
    price: 999,
    
    welcomeMessage: function () { 
        console.log(`Welcome ${this.username} to our website`);
        console.log(this);
        
    }
}
//this current context ko refer krta hai

// user.welcomeMessage(); // Welcome Aamir to our website
// user.username = "Ali";
// user.welcomeMessage(); // Welcome Ali to our website
//we have change the context of this function by changing the value of username property
//therefore, this function will always refer to the current context of the object it is called on

// console.log(this);


// function chai() {
//     let username = "Aamir";
//     console.log(this.username); // undefined
//     console.log(username); // Aamir
    
// }

// chai()

// Arrow functions do not have their own `this` context. They inherit `this` from the parent scope.
// This makes them particularly useful in scenarios where you want to maintain the context of `this`

// const chai = function () {
//     let username = "Aamir";
//     console.log(this.username); // undefined

// }

const chai = () => {
    let username = "Aamir"; 
    console.log(this.username); // undefined
    console.log(this); // Window object in browser or global object in Node.js
} 
chai()

// In the above example, `this` inside the arrow function refers to the global object (or `window` in browsers) because arrow functions do not have their own `this` context.

// This means that if you try to access `this.username` inside the arrow function, it will not refer to the `username` property of the `user` object.
// Instead, it will look for `username` in the global scope, which is why it returns `undefined`.
// If you want to use `this` inside an arrow function, you need to ensure that the arrow function is defined in a context where `this` refers to the desired object.
// For example, if you want to use `this` inside an arrow function that is a method of an object, you can do it like this:

//implicit return
// If the function body contains a single expression, you can omit the curly braces and the `return` keyword. This is known as an implicit return.
// const addOne = num => num + 1;   
// const addTwo = (num1, num2) => num1 + num2
const addTwo = (num1, num2) => (num1 + num2)

// returning objects
const createUser = (username, price) => ({ username: "Aamir", price: 999});
console.log(createUser()); // { username: 'Aamir', price: 999 }
console.log(addTwo(5, 10)); // 15


// Arrow functions are particularly useful in scenarios where you want to maintain the context of `this` in callbacks, such as in event handlers or array methods like `map`, `filter`, and `reduce`.


const myArray = [1, 2, 3, 4, 5];
myArray.forEach((num) => {
    console.log(num * 2); // 2, 4, 6, 8, 10
});